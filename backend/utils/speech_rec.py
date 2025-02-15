import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)

def upload_to_gemini(path, mime_type=None):
  """Uploads the given file to Gemini.

  See https://ai.google.dev/gemini-api/docs/prompting_with_media
  """
  file = genai.upload_file(path, mime_type=mime_type)
  print(f"Uploaded file '{file.display_name}' as: {file.uri}")
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
  system_instruction="You will analyze an audio file which can be in any audio format. Pick out any food items that are mentioned and output them in a csv format without duplicates. Ensure there is a comma between 2 items. For instance, if I mention milk, eggs and bread, the output should be milk,bread,eggs.",
)

def speech_rec(src_path):
    files = [
    upload_to_gemini(src_path, mime_type="audio/aac"),
    ]

    chat_session = model.start_chat(
    history=[
        {
        "role": "user",
        "parts": [
            files[0],
        ],
        },
        {
        "role": "model",
        "parts": [
            "tomatoes,milk,bread,eggs\n",
        ],
        },
    ]
    )

    response = chat_session.send_message("answer")

    return response.text
