#!/usr/bin/python3
"""
User services
"""
from Server.app.models.user import User
from Server.app.utils.database import db


def create_user(username, email, contact, address, is_seller, password):
    user = User(username=username, email=email, contact=contact, address=address, is_seller=is_seller,
                password=password)
    db.session.add(user)
    db.session.commit()
    return user.save()


def get_user(user_id):
    return User.query.get(user_id)


def get_users():
    return User.query.all()
