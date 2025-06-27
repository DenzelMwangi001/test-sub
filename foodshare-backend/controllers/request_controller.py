from flask import Blueprint, request, jsonify
from models.request import Request
from app import db

request_bp = Blueprint("request_bp", __name__, url_prefix="/requests")

@request_bp.route("/", methods=["GET"])
def get_requests():
    requests = Request.query.all()
    return jsonify([{
        "id": r.id,
        "note": r.note,
        "status": r.status,
        "food_item_id": r.food_item_id,
        "receiver_id": r.receiver_id
    } for r in requests]), 200

@request_bp.route("/", methods=["POST"])
def create_request():
    data = request.get_json()
    new_request = Request(
        note=data.get("note"),
        food_item_id=data["food_item_id"],
        receiver_id=data["receiver_id"]
    )
    db.session.add(new_request)
    db.session.commit()
    return jsonify({"message": "Request submitted!"}), 201
