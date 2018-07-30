#!/bin/bash

cd todo_user
sh deploy.sh
cd ..

cd todo_user_db
sh deploy.sh
cd ..

cd todo_task
sh deploy.sh
cd ..

cd todo_task_db
sh deploy.sh
cd ..

cd todo_ui
sh deploy.sh
cd ..


