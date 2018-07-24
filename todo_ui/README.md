# microservice_todo_ui

This is a Todo microservice on Kubernetes.

<br>

Checkout repository:

```
git clone https://github.com/sachsenhofer/microservice_todo_ui.git
```

<br>

# Usage

### Build

Builds the Docker image.

Execute in terminal:

```
sudo docker build -t microservice-todo-ui:latest .
```

<br>

### Push

Pushes an image or a repository to the Google Container Registry.

A Google Cloud account is needed. Replace '__sai-research__' with your own Project-ID.

Execute in terminal:

```
sudo docker tag microservice-todo-ui:latest eu.gcr.io/sai-research/microservice-todo-ui:latest
sudo docker push eu.gcr.io/sai-research/microservice-todo-ui:latest
```

<br>

### Pull

Pulls the image from the Google Container Registry.

Execute in terminal:

```
sudo docker pull eu.gcr.io/sai-research/microservice-todo-ui:latest
```

<br>

### Run

Runs the image on your local machine.

Execute in terminal:

```
sudo docker run -p 8080:8080 eu.gcr.io/sai-research/microservice-todo-ui:latest
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
NAME                      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
microservice-todo-ui-dep   2         2         2            2           8m

NAME                                       READY     STATUS    RESTARTS   AGE
microservice-todo-ui-dep-85bc599557-2g7fj   1/1       Running   0          8m
microservice-todo-ui-dep-85bc599557-gzzdz   1/1       Running   0          8m

NAME                      TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
microservice-todo-ui-svc   ClusterIP   10.63.253.93    <none>     8080:31666/TCP   8m
```

<br>

### Delete

To delete all resources, execute the following command.

Execute in terminal:

```
kubectl delete -f deploy/kubernetes
```
