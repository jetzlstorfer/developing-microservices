# developing-microservices

This is the home of the Dynatrace Developing Microservices workshop.

Information: dominik.sachsenhofer@dynatrace.com

<br>
<br>

# Contents

__Lab 1:__ Container and containerized apps

__Lab 2:__ Using a Container Registry

__Lab 3:__ Create a microservices application

__Lab 4:__ Setup a Kubernetes Cluster

__Lab 5:__ Deploy a microservices application on a Kubernetes Cluster

__Lab 6:__ Instrument a Kubernetes Cluster with Dynatrace

<br>
<br>

# Lab 1: Container and containerized apps

### Step 1/5: Create a Python Web application

File: directory/app.py

```
from flask import Flask 
app = Flask(__name__) 

@app.route("/")
def hello(): 
   return "Hello World!”

if __name__ == '__main__‘:
   app.run(debug=False, host='0.0.0.0', port=8080)
```

### Step 2/5: Create a requirements.txt

File: directory/requirements.txt

```
flask==0.10.1
```

### Step 3/5: Create a Dockerfile

File: directory/Dockerfile

```
FROM ubuntu:latest 
RUN apt-get update 
RUN apt-get install -y python-pip python-dev build-essential wget curl COPY . /app 
WORKDIR /app 
RUN pip install -r requirements.txt 
EXPOSE 8080 
ENTRYPOINT ["python"] 
CMD ["app.py"]
```

### Step 4/5: Build the Docker container

```
docker build –t sai-research/hello-world:latest .
```

### Step 5/5: Run the Docker container

```
docker run –p 8080:8080 sai-research/hello-world:latest
```

<br>
<br>

# Lab 2: Using a Container Registry

### Step 1/3: Build the image

```
sudo docker build -t sai-research/hello-world:latest .
```

### Step 2/3: Tag the image

```
sudo docker tag sai-research/hello-world:latest eu.gcr.io/sai-research/hello-world:latest 
```

### Step 3/3: Push the image to the Container Registry

```
sudo docker push eu.gcr.io/sai-research/hello-world:latest
```

<br>
<br>

# Usage

### Download

Clone repositories:

```
git clone https://github.com/dynatrace-innovationlab/developing-microservices.git
```

<br>

### Deploy

Deploys the application to the Kubernetes cluster.

Execute in terminal:

```
sh deploy.sh
```

<br>

Check all ressources that have been created:

```
kubectl get deployments,pods,services -n todo
```

```
NAME                      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deploy/todo-task-db-dep   1         1         1            1           3m
deploy/todo-task-dep      1         1         1            1           3m
deploy/todo-ui-dep        1         1         1            1           3m
deploy/todo-user-db-dep   1         1         1            1           3m
deploy/todo-user-dep      1         1         1            1           3m

NAME                                   READY     STATUS    RESTARTS   AGE
po/todo-task-db-dep-587d964cb-cpjd6    1/1       Running   0          3m
po/todo-task-dep-5849cbff9f-hq94m      1/1       Running   0          3m
po/todo-ui-dep-6df6c797bd-2c2rc        1/1       Running   0          3m
po/todo-user-db-dep-799dd794f8-f94jc   1/1       Running   0          3m
po/todo-user-dep-b86767b8f-fm7sx       1/1       Running   0          3m

NAME                   TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
svc/todo-task-db-svc   ClusterIP      10.63.243.124   <none>          27017/TCP        3m
svc/todo-task-svc      ClusterIP      10.63.245.42    <none>          8080/TCP         3m
svc/todo-ui-svc        LoadBalancer   10.63.249.213   35.233.69.142   8080:32257/TCP   3m
svc/todo-user-db-svc   ClusterIP      10.63.252.241   <none>          27017/TCP        3m
svc/todo-user-svc      ClusterIP      10.63.249.235   <none>          8080/TCP         3m
```

<br>

### Test

To test, go to http://35.233.69.142:8080 in your browser.

<br>

### Delete

To delete all resources, execute the following command.

Execute in terminal:

```
kubectl delete namespace todo
```

<br>
<br>

# Screenshots

![Todo3](./assets/img3.png)
