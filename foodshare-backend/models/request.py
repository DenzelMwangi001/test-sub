from app import db

class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    note = db.Column(db.String)
    status = db.Column(db.String, default='pending')

    food_item_id = db.Column(db.Integer, db.ForeignKey('food_item.id'))
    receiver_id = db.Column(db.Integer, db.ForeignKey('user.id'))
