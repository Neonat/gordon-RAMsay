from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('../frontend/pages/index.html')

@app.route('/chatbot_selector', methods = ['GET', 'POST'])
def chatbot():
    return render_template('../frontend/pages/')

