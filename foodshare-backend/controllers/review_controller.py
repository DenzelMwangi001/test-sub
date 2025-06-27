from flask import Blueprint, request, jsonify
from models.review import Review
from app import db

review_bp = Blueprint("review_bp", __name__, url_prefix="/reviews")

@review_bp.route("/", methods=["GET"])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([{
        "id": r.id,
        "donor_id": r.donor_id,
        "receiver_id": r.receiver_id,
        "rating": r.rating,
        "comment": r.comment
    } for r in reviews]), 200

@review_bp.route("/", methods=["POST"])
def create_review():
    data = request.get_json()
    review = Review(
        donor_id=data["donor_id"],
        receiver_id=data["receiver_id"],
        rating=data["rating"],
        comment=data.get("comment", "")
    )
    db.session.add(review)
    db.session.commit()
    return jsonify({"message": "Review posted!"}), 201
