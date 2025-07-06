from flask import Flask
from flask_cors import CORS
from auth import auth_bp
import os 

app = Flask(__name__)
CORS(app)  # allow frontend to connect

# Register the login/signup routes from auth.py
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    # This is required by Render to bind to the correct port
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
