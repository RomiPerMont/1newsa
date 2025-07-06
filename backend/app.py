from flask import Flask
from flask_cors import CORS
from auth import auth_bp

app = Flask(__name__)
CORS(app)  # allow frontend to connect

# Register the login/signup routes from auth.py
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    app.run(debug=True)
