#!/usr/bin/python3
"""
Product services
"""
from Server.app.models.product import Product
from Server.app.utils.database import db


def create_product(name, description, price, quantity, seller_id, image_url):
    product = Product(name=name, description=description, price=price, quantity=quantity, seller_id=seller_id,
                      image_url=image_url)
    db.session.add(product)
    db.session.commit()
    return product.save()


def get_product(product_id):
    return Product.query.get(product_id)


def get_products():
    return Product.query.all()
