#!/usr/bin/python3
"""
User model schema
"""

from app import db


class User(db.Models):
    id = db.Column(db.integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contact = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    is_seller = db.Column(db.Boolean, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

    def to_dict(self):
        return{
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'contact': self.contact,
            'address': self.address,
            'is_seller': self.is_seller

        }
