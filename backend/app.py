from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.imagerec import img_detect_items
from utils.api_tool import get_recipe_instruction
from ai import graph, process_user_input
import json
from spoonacular import SearchRecipes200ResponseResultsInner
import os
import subprocess


app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure upload folder exists

@app.route("/upload", methods=["POST"])
def upload_file():
    if "image" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    return jsonify({"message": "File uploaded successfully", "file_path": file_path})

@app.route('/get-fridge-items', methods = ['GET', 'POST'])
def get_fridge_items(image_path):
    items = img_detect_items()
    return {"items": items}


@app.route('/chat', methods=['POST', 'GET'])
def chat():
    data = request.get_json()
    user_input = data.get("message")

    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    # Call the processing function from ai.py
    response = process_user_input(user_input)

    return jsonify({"response": response})


@app.route('/api/upload-photo', methods=['POST'])
def upload_photo():
    data = request.json
    photo_data_url = data.get('photo')

    if not photo_data_url:
        return jsonify({"error": "No photo data provided"}), 400

    # Save the base64 image to a temporary file
    import base64
    header, encoded = photo_data_url.split(",", 1)
    binary_data = base64.b64decode(encoded)
    temp_image_path = "temp_image.jpg"
    with open(temp_image_path, "wb") as f:
        f.write(binary_data)

    # Call the Python script to process the image
    try:
        result = subprocess.run(
            ["python3", "imagerec.py", temp_image_path],
            capture_output=True,
            text=True
        )
        if result.returncode != 0:
            return jsonify({"error": "Failed to process image", "details": result.stderr}), 500

        # Parse the output from the script
        detected_items = result.stdout.strip()
        return jsonify({"detected_items": detected_items})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        # Clean up the temporary file
        if os.path.exists(temp_image_path):
            os.remove(temp_image_path)

if __name__ == '__main__':
    app.run(debug=True)
