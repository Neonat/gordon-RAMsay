import streamlit as st
from utils.api_tool import get_recipe_instruction

if st.session_state.selectedRecipe:
    recipe_instructions = get_recipe_instruction(st.session_state.selectedRecipe)
    st.title(recipe_instructions['name'])

    for step in recipe_instructions['steps']:
        st.markdown(f'Step {step['number']}: {step['step']}')

else:
    st.title("Please select a recipe")