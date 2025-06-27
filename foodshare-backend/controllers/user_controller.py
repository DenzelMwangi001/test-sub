from flask import Blueprint, request, jsonify
from models.user import User
from app import db

user_bp = Blueprint("user_bp", __name__, url_prefix="/users")

@user_bp.route("/", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{
        "id": u.id,
        "name": u.name,
        "email": u.email,
        "location": u.location,
        "is_provider": u.is_provider
    } for u in users]), 200

@user_bp.route("/", methods=["POST"])
def create_user():
    data = request.get_json()
    user = User(
        name=data["name"],
        email=data["email"],
        location=data.get("location"),
        is_provider=data.get("is_provider", False)
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User created!", "id": user.id}), 201
