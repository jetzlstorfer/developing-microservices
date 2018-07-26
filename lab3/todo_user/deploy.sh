#!/bin/bash

sudo docker build -t microservice-todo-user:latest .
sudo docker tag microservice-todo-user:latest eu.gcr.io/sai-research/microservice-todo-user:latest
sudo docker push eu.gcr.io/sai-research/microservice-todo-user:latest

kubectl apply -f deploy/kubernetes/
