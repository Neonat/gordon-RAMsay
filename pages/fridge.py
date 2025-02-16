import streamlit as st
from streamlit_card import card
from PIL import Image
from werkzeug.utils import secure_filename
import os
from ai import graph
from utils.imagerec import img_detect_items
from utils.api_tool import query_spoonacular_api
from spoonacular import SearchRecipes200ResponseResultsInner

st.title("Fridge detector")

UPLOAD_FOLDER = 'fridge_images'

uploaded_file = st.file_uploader("Take a picture of your fridge...", type=["jpg", "png", "jpeg"], accept_multiple_files=False, label_visibility="visible")
if uploaded_file is not None:    
    try:
        image = Image.open(uploaded_file)
        st.image(image, caption="Uploaded Image", use_column_width=True)  
        filename = secure_filename(uploaded_file.name) # Important for security
        filepath = os.path.join(UPLOAD_FOLDER, filename)        
        with open(filepath, "wb") as f: # Use a binary write mode
            f.write(uploaded_file.getbuffer())
        st.success(f"Image saved successfully to: {filepath}")
    except:
        print("An error occured")

with st.spinner():
    ingredients = img_detect_items(filepath)
    st.write(ingredients)
    generate_recipes = st.button("Generate recipes")

if generate_recipes:
    response = query_spoonacular_api(ingredients)
    
    for recipe in response:
        print(recipe)
        recipe_card = card(
            title=recipe.title,
            text="Some description",
            image=recipe.image,
            styles={
                "card": {
                    "width": "100%", # <- make the card use the width of its container, note that it will not resize the height of the card automatically
                }
            }
        )
