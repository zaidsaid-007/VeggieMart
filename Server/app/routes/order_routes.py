#!/usr/bin/python3
"""
Order routes
"""
from flask import Blueprint, request, jsonify
from app.services import order_services

order_bp = Blueprint('order', __name__)


@order_bp.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    buyer_id = data.get('buyer_id')
    product_id = data.get('product_id')
    quantity = data.get('quantity')
    total = data.get('total')
    order = order_services.create_order(buyer_id, product_id, quantity, total)
    return jsonify(order.to_dict()), 201


@order_bp.route('/orders', methods=['GET'])
def get_orders():
    orders = order_services.get_orders()
    return jsonify([order.to_dict() for order in orders])


@order_bp.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    order = order_services.get_order(order_id)
    if order is None:
        return jsonify({'error': 'Order not found'}), 404
    return jsonify(order.to_dict())
