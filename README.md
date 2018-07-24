# microservice_todo

This is a Todo microservice application on Kubernetes.

<br>
<br>

![Todo1](./assets/img2.png)
![Todo2](./assets/img1.png)

<br>

Checkout repositories:

```
git clone https://github.com/sachsenhofer/microservice_todo.git
git clone https://github.com/sachsenhofer/microservice_todo_task.git
git clone https://github.com/sachsenhofer/microservice_todo_task_db.git
git clone https://github.com/sachsenhofer/microservice_todo_ui.git
```

<br>

# Usage

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
NAME                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deploy/todo-task-db    1         1         1            1           56m
deploy/todo-task-dep   1         1         1            1           55m
deploy/todo-ui-dep     1         1         1            1           55m

NAME                                READY     STATUS    RESTARTS   AGE
po/todo-task-db-587d964cb-5rr6r     1/1       Running   0          56m
po/todo-task-dep-5849cbff9f-prjsp   1/1       Running   0          55m
po/todo-ui-dep-86dfc9b5f5-r2pcz     1/1       Running   0          55m

NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)          AGE
svc/todo-task-db-svc   ClusterIP      10.63.249.31   <none>          27017/TCP        56m
svc/todo-task-svc      ClusterIP      10.63.251.36   <none>          8080/TCP         55m
svc/todo-ui-svc        LoadBalancer   10.63.254.73   35.240.82.100   8080:30246/TCP   55m
```

<br>

### Delete

To delete all resources, execute the following command.

Execute in terminal:

```
kubectl delete namespace todo
```
