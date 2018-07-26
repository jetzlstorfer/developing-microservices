# microservice_todo_task

This is a Todo microservice on Kubernetes.

<br>

Checkout repository:

```
git clone https://github.com/sachsenhofer/microservice_todo_task.git
```

<br>

# Usage

### Build

Builds the Docker image.

Execute in terminal:

```
sudo docker build -t microservice-todo-task:latest .
```

<br>

### Push

Pushes an image or a repository to the Google Container Registry.

A Google Cloud account is needed. Replace '__sai-research__' with your own Project-ID.

Execute in terminal:

```
sudo docker tag microservice-todo-task:latest eu.gcr.io/sai-research/microservice-todo-task:latest
sudo docker push eu.gcr.io/sai-research/microservice-todo-task:latest
```

<br>

### Pull

Pulls the image from the Google Container Registry.

Execute in terminal:

```
sudo docker pull eu.gcr.io/sai-research/microservice-todo-task:latest
```

<br>

### Run

Runs the image on your local machine.

Execute in terminal:

```
sudo docker run -p 8080:8080 eu.gcr.io/sai-research/microservice-todo-task:latest
```

<br>

### Deploy

Deploys the application to the Kubernetes cluster.

Execute in terminal:

```
kubectl create -f deploy/kubernetes
```

<br>

Check all ressources that have been created:

```
kubectl get deployments,pods,services -n todo
```

```
NAME                             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deploy/microservice-todo-task-dep   2         2         2            2           2m

NAME                                          READY     STATUS    RESTARTS   AGE
po/microservice-todo-task-dep-6b6dbdfb44-krtl7   1/1       Running   0          2m
po/microservice-todo-task-dep-6b6dbdfb44-rpp7x   1/1       Running   0          2m

NAME                          TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)          AGE
svc/microservice-todo-task-svc   ClusterIP   10.63.251.103   <none>   8080:30667/TCP   2m
```

<br>

### Delete

To delete all resources, execute the following command.

Execute in terminal:

```
kubectl delete -f deploy/kubernetes
```
