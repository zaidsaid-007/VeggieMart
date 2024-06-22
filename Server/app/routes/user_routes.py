#!/usr/bin/python3
"""
Routes definition for user
"""
from flask import request, jsonify, Blueprint
from Server.app.services import user_services


user_bp = Blueprint('user', __name__)


@user_bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    contact = data.get('contact')
    address = data.get('address')
    is_seller = data.get('is_seller')
    password = data.get('password')
    user = user_services.create_user(username, email, contact, address, is_seller, password)
    return jsonify(user.to_dict()), 201


@user_bp.route('/users', methods=['GET'])
def get_users():
    users = user_services.get_users()
    return jsonify([user.to_dict() for user in users])


@user_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = user_services.get_user(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user.to_dict())
