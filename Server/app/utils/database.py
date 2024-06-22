#!/usr/bin/python3
"""
Database Connection module
"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    db.init_app(app)
    db.create_all()
    return db
