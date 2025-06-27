from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS  
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # Enable CORS
    CORS(app)  #  Allow frontend requests

    # Import models so they're recognized
    from models import user, food_item, request, review

    # Register blueprints
    from controllers.user_controller import user_bp
    from controllers.food_item_controller import food_item_bp
    from controllers.request_controller import request_bp
    from controllers.review_controller import review_bp

    app.register_blueprint(user_bp)
    app.register_blueprint(food_item_bp)
    app.register_blueprint(request_bp)
    app.register_blueprint(review_bp)

    @app.route("/")
    def index():
        return {"message": "FoodShare API is running"}

    return app

