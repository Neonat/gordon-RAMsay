import os
import spoonacular
from langchain_core.tools import tool
from spoonacular.rest import ApiException
from dotenv import load_dotenv

load_dotenv()

SPOONACULAR_API_KEY = os.getenv('SPOONACULAR_API_KEY')

def configure_spoonacular():
    configuration = spoonacular.Configuration(host = "https://api.spoonacular.com")
    configuration.api_key['apiKeyScheme'] = SPOONACULAR_API_KEY
    return configuration

@tool
def query_spoonacular_api(query: str = "", cuisine: str = None, diet: str = None, ingredients: str = None) -> dict:
    """   Queries the Spoonacular API for recipes.

    Args:
        query: The search query (e.g., "pasta", "chicken").
        cuisine: (Optional) The cuisine to filter by. Choose from the supported cuisines in this list: ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]. Defaults to None.
        diet: (Optional) The dietary restriction to filter by. Choose from the supported diets in this list: ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]. Defaults to None.
        ingredients: (Optional) The list of ingredients that should be used in the recipes, written as a string with commas separating the items. Example: cauliflower,chicken,strawberry jam,apples. Defaults to None.

    Returns:
        A a list of recipes from spoonacular according to the arguments provided.
    """
    supported_cuisines = ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]
    supported_diets = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]

    # Data validation
    cuisine = cuisine if cuisine in supported_cuisines else None
    diet = diet if diet in supported_diets else None
    number = 5
    offset = 0            # Change this to get different recipes each time the api is run

    configuration = configure_spoonacular()
    # Enter a context with an instance of the API client
    with spoonacular.ApiClient(configuration) as api_client:
        # Create an instance of the API class
        api_instance = spoonacular.RecipesApi(api_client)

        try:
            # Generate recipe with ingredients
            if ingredients:
                api_response = api_instance.search_recipes_by_ingredients(ingredients=ingredients, number=5, offset=0, ranking=2) # Ranking = 1 to maximise used ingredients or ranking = 2 to minimize missing ingredients.
                return api_response.results
            
            else:     
                api_response = api_instance.search_recipes(query, cuisine=cuisine, diet=diet, number=number, offset=offset)
                return api_response.results
        
        except ApiException as e:
            print(f"Exception when calling RecipeApi: {e}\n")

def get_recipe_instruction(id):
    configuration = configure_spoonacular()
    # Enter a context with an instance of the API client
    with spoonacular.ApiClient(configuration) as api_client:
        # Create an instance of the API class
        api_instance = spoonacular.RecipesApi(api_client)

        try:
            # Generate recipe with ingredients
            api_response = api_instance.get_analyzed_recipe_instructions(id)
            return api_response
        
        except ApiException as e:
            print(f"Exception when calling RecipeApi: {e}\n")
