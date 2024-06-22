#!/usr/bin/python3
""""
App initalization file
"""
from flask import Flask
from config import Config
from models import*
from services import*
from routes import*
from utils import*

from utils.database import init_db

app = Flask(__name__)
app.config.from_object(Config)

db = init_db(app)


