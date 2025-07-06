import json
import jwt
import datetime
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint('auth', __name__)
SECRET_KEY = 'your_secret_key'  # 🔐 you can change this later

@auth_bp.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    with open('users.json', 'r+') as file:
        users = json.load(file)
        if any(u['email'] == data['email'] for u in users):
            return jsonify({'message': 'User already exists'}), 409

        hashed_pw = generate_password_hash(data['password'])
        new_user = {'email': data['email'], 'password': hashed_pw}
        users.append(new_user)
        file.seek(0)
        json.dump(users, file)
        return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    with open('users.json', 'r') as file:
        users = json.load(file)
        user = next((u for u in users if u['email'] == data['email']), None)
        if not user or not check_password_hash(user['password'], data['password']):
            return jsonify({'message': 'Invalid credentials'}), 401

        token = jwt.encode({
            'email': user['email'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, SECRET_KEY, algorithm='HS256')

        return jsonify({'token': token})
