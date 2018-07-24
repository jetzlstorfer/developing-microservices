import os
from flask import Flask, request
from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId

TODO_TASK_DB_SVC = os.environ['TODO_TASK_DB_SVC']

app = Flask(__name__)


@app.route('/')
def index():
    return 'Welcome to Todo!'


@app.route('/health')
def health():
    return '0'


@app.route('/add_task')
def add_todo():
    client = MongoClient(TODO_TASK_DB_SVC)
    db = client.database
    coll = db.tasks

    task_user_id = request.args.get('task_user_id')
    task_name = request.args.get('task_name')

    task_id = coll.insert_one({"task_user_id": task_user_id, "task_name": task_name}).inserted_id

    return str(task_id)


@app.route('/delete_task')
def delete_todo():
    client = MongoClient(TODO_TASK_DB_SVC)
    db = client.database
    coll = db.tasks

    task_id = request.args.get('task_id')

    coll.delete_one({'_id': ObjectId(task_id)})

    return str(task_id)


@app.route('/list_tasks')
def list_todo():
    client = MongoClient(TODO_TASK_DB_SVC)
    db = client.database
    coll = db.tasks
    
    task_user_id = request.args.get('task_user_id')

    cursor = coll.find({"task_user_id": task_user_id})
    l = list(cursor)

    return json_util.dumps(l)


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8080)
