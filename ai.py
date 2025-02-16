from typing import TypedDict, Optional, List
from dotenv import load_dotenv
from langgraph.graph import StateGraph, START, END
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langgraph.prebuilt.tool_node import ToolNode
from utils.api_tool import query_spoonacular_api

load_dotenv()

llm = ChatGoogleGenerativeAI(model='gemini-1.5-flash')


class GraphState(TypedDict):
    user_input: Optional[str] = None
    profile: Optional[str] = None
    api_info: List = None
    ingredients: Optional[str] = None
    response: Optional[str] = None

def decider_node(state):
    user_input = state.get("user_input", "")


def call_api_tool_node(state):
    user_input = state.get("user_input", "")
    profile = state.get("profile", "")
    ingredients = state.get("ingredients", "")
    llm_with_tools = llm.bind_tools([query_spoonacular_api])

    system_template = """You are part of a system that helps users decide which recipes to cook. 
                        Your job is to extract relevant information from a user's input to query an external api effectively.
                        You are provided with a tool can allows you to query an api that will provide you with recipe options to provide the user with.
                        The users input is enclosed by 4 hashtags.
    """
    human_template = """
        ####{user_input}####
    """

    prompt_template = ChatPromptTemplate.from_messages(
        [("system", system_template), ("user", human_template)]
    )

    chain = prompt_template | llm_with_tools
    response = chain.invoke({"user_input": user_input})

    return {"api_info": [response]}

def list_recipes_node(state):
    user_input = state.get("user_input", "")
    api_result = state.get("api_info", "")
    
    prompt = f"The retrieved recipes are shown in the list: {api_result}. Please provide the names of the recipes retrieved."

    chain = llm | StrOutputParser()
    response = chain.invoke(prompt)
    
    return {"response": response}

workflow = StateGraph(GraphState)
workflow.add_node("call_external_api", call_api_tool_node)
workflow.add_node("execute_api_tool", ToolNode([query_spoonacular_api], messages_key="api_info"))
workflow.add_node("list_recipes", list_recipes_node)

workflow.add_edge(START, "call_external_api")
workflow.add_edge("call_external_api", "execute_api_tool")
workflow.add_edge("execute_api_tool", "list_recipes")
workflow.add_edge("list_recipes", END)
'''
    workflow.add_conditional_edges(
        "check_math",
        lambda state: state["response"],
        {
            "Yes": "call_calculator_agent",
            "No": "advisor"
        }
    )
'''

graph = workflow.compile()

'''
result = app.invoke({"user_input": "I love indian food. Give me vegetarian recipes I can make"})

print(result)
'''