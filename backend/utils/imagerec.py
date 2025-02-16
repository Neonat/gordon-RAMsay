import os
import google.generativeai as genai
from dotenv import load_dotenv
import sys

load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

def upload_to_gemini(path, mime_type=None):
    file = genai.upload_file(path, mime_type=mime_type)
    return file

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
    system_instruction='''You are an expert product analyzer. 
    Your task is to analyze the image of one or more food-related items and provide the specific product name, such as "rice" or "yoghurt" in csv format.
    The final csv should contain a comma between every 2 items.
    Ensure the csv has no spaces before and after the commas.
    If the item is not recognized, ignore the item.
    '''
)

def img_detect_items(img_path):
    files = [upload_to_gemini(img_path, mime_type="image/jpeg")]

    chat_session = model.start_chat(
        history=[
            {
                "role": "user",
                "parts": [
                    files[0],
                ],
            },
        ]
    )

    response = chat_session.send_message("Answer")
    raw = response.text.split(",")

    unique_items = list(set(raw))
    result_string = ",".join(sorted(unique_items))
    return result_string

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 imagerec.py <image_path>")
        sys.exit(1)