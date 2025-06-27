from app import db

class FoodItem(db.Model):
    __tablename__ = 'food_item'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    expiry_date = db.Column(db.Date, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    requests = db.relationship('Request', backref='food_item', lazy=True)

    def __repr__(self):
        return f"<FoodItem {self.name}>"

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "quantity": self.quantity,
            "expiry_date": self.expiry_date.isoformat(),
            "location": self.location,
            "user_id": self.user_id
        }
