from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.imagerec import img_detect_items
from utils.api_tool import get_recipe_instruction
from ai import graph
import json
from spoonacular import SearchRecipes200ResponseResultsInner
import os

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

@app.route('/chat', methods = ['POST'])
def chat():
    data = request.json
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    # Process the user message using LangChain
    response = graph.invoke({"user_input": user_message})
    print(response)
    list_of_recipes = eval(response['api_info'][0].content)
    

    recipes = {}
    for recipe in list_of_recipes:
        recipe_id = recipe.id
        recipes[recipe_id] = {'name': recipe.title, 'image': recipe.image, 'image_type': recipe.image_type}

    return json.dumps(recipes)

@app.route('/get-recipe-instructions/<int:id>', methods = ['GET'])
def get_recipe_instructions(id):
    steps = {}
    
    list_of_steps = get_recipe_instruction(id)[0].steps
    for step in list_of_steps:
        steps[f'Step {step.number}'] = step.step
    
    return json.dumps(steps)
