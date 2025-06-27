from flask import Blueprint, request, jsonify
from models.food_item import FoodItem
from app import db

# ✅ Correct URL prefix that matches frontend requests
food_item_bp = Blueprint("food_item_bp", __name__, url_prefix="/api/food_items")

@food_item_bp.route("/", methods=["GET"])
def get_food_items():
    items = FoodItem.query.all()
    return jsonify([item.to_dict() for item in items]), 200

@food_item_bp.route("/", methods=["POST"])
def create_food_item():
    data = request.get_json()

    item = FoodItem(
        name=data.get("name"),
        quantity=data.get("quantity"),
        expiry_date=data.get("expiry_date"),
        user_id=data.get("user_id")
    )

    db.session.add(item)
    db.session.commit()

    return jsonify({
        "message": "Food item created!",
        "id": item.id
    }), 201

