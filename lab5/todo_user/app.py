import os
from flask import Flask, request
from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId

TODO_USER_DB_SVC = os.environ['TODO_USER_DB_SVC']

app = Flask(__name__)


@app.route('/')
def index():
    return 'Welcome to Todo!'


@app.route('/health')
def health():
    return '0'


@app.route('/register_user')
def register_user():
    client = MongoClient(TODO_USER_DB_SVC)
    db = client.database
    coll = db.users

    user_name = request.args.get('user_name')
    user_password = request.args.get('user_password')

    user_id = coll.insert_one({"user_name": user_name, "user_password": user_password}).inserted_id

    return str(user_id)


@app.route('/signin_user')
def signin_user():
    client = MongoClient(TODO_USER_DB_SVC)
    db = client.database
    coll = db.users

    user_name = request.args.get('user_name')
    user_password = request.args.get('user_password')

    if coll.find({"user_name": user_name, "user_password": user_password}).count() > 0:
        user = coll.find_one({"user_name": user_name, "user_password": user_password})
        if user['_id']:
            user_id = user['_id']
            return str(user_id)
        else:
            return '-2'
    else:
        return '-1'


@app.route('/delete_user')
def delete_user():
    client = MongoClient(TODO_USER_DB_SVC)
    db = client.database
    coll = db.users

    user_id = request.args.get('user_id')

    coll.delete_one({'_id': ObjectId(user_id)})

    return str(user_id)


@app.route('/list_users')
def list_users():
    client = MongoClient(TODO_USER_DB_SVC)
    db = client.database
    coll = db.users
    
    cursor = coll.find()
    l = list(cursor)

    return json_util.dumps(l)


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8080)
