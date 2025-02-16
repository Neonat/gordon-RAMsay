import streamlit as st
from streamlit_card import card
from ai import graph
from spoonacular import SearchRecipes200ResponseResultsInner
from utils.api_tool import get_recipe_instruction
import time

st.title("Kitchen Co-pilot chatbot")

if "messages" not in st.session_state:
    st.session_state.messages = []

if "selectedRecipe" not in st.session_state:
    st.session_state.selectedRecipe = None

print(st.session_state)

def go_to_recipe_page(recipe_id: int):
    st.session_state.selectedRecipe = recipe_id
    time.sleep(1.0)
    print(st.session_state)
    st.switch_page('pages/recipe.py')

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("What do you want to eat?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant"):
        '''
        stream = client.chat.completions.create(
            model=st.session_state["openai_model"],
            messages=[
                {"role": m["role"], "content": m["content"]}
                for m in st.session_state.messages
            ],
            stream=True,
        )
        response = st.write_stream(stream)
        '''
        with st.spinner():
            response = graph.invoke({"user_input": prompt})
            list_of_recipes = eval(response['api_info'][0].content)
            for recipe in list_of_recipes:
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
                '''print(get_recipe_instruction(recipe.id))
                list_of_steps = get_recipe_instruction(recipe.id)[0].steps
                for step in list_of_steps:
                    st.markdown(f'Step {step.number} = {step.step}')'''
    # st.session_state.messages.append({"role": "assistant", "content": result['response']})