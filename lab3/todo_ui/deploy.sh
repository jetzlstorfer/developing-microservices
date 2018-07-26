#!/bin/bash

sudo docker build -t microservice-todo-ui:latest .
sudo docker tag microservice-todo-ui:latest eu.gcr.io/sai-research/microservice-todo-ui:latest
sudo docker push eu.gcr.io/sai-research/microservice-todo-ui:latest

kubectl apply -f deploy/kubernetes/
