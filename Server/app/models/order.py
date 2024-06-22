#!/usr/bin/python3
"""
Order model schema
"""
from app import db

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    buyer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    buyer = db.relationship('User', backref=db.backref('orders', lazy=True))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    product = db.relationship('Product', backref=db.backref('orders', lazy=True))
    quantity = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Order {self.id}>'

    def to_dict(self):
        return{
            'id': self.id,
            'buyer_id': self.buyer_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'total': self.total
        }