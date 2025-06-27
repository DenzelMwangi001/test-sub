from app import db

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    location = db.Column(db.String(100), nullable=True)
    is_provider = db.Column(db.Boolean, default=False)

    food_items = db.relationship('FoodItem', backref='user', lazy=True)
    requests_made = db.relationship('Request', foreign_keys='Request.receiver_id', backref='receiver', lazy=True)

    def __repr__(self):
        return f"<User {self.name}>"

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "location": self.location,
            "is_provider": self.is_provider
        }
