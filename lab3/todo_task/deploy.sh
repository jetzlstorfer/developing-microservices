#!/bin/bash

sudo docker build -t microservice-todo-task:latest .
sudo docker tag microservice-todo-task:latest eu.gcr.io/sai-research/microservice-todo-task:latest
sudo docker push eu.gcr.io/sai-research/microservice-todo-task:latest

kubectl apply -f deploy/kubernetes/
