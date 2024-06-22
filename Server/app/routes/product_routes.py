#!/usr/bin/python3
"""
Product routes
"""
from flask import Blueprint, request, jsonify
from Server.app.services import product_services

product_bp = Blueprint('product', __name__)


@product_bp.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    quantity = data.get('quantity')
    seller_id = data.get('seller_id')
    image_url = data.get('image_url')
    product = product_services.create_product(name, description, price, quantity, seller_id, image_url)
    return jsonify(product.to_dict()), 201


@product_bp.route('/products', methods=['GET'])
def get_products():
    products = product_services.get_products()
    return jsonify([product.to_dict() for product in products])


@product_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = product_services.get_product(product_id)
    if product is None:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(product.to_dict())
