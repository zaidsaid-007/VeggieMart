#!/usr/bin/python3
"""
Order services
"""

from Server.app.models.order import Order
from Server.app.utils.database import db


def create_order(buyer_id, product_id, quantity, total):
    order = Order(buyer_id=buyer_id, product_id=product_id, quantity=quantity, total=total)
    db.session.add(order)
    db.session.commit()
    return order.save()


def get_order(order_id):
    return Order.query.get(order_id)


def get_orders():
    return Order.query.all()
