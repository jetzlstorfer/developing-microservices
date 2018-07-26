# Lab 4: Create a Kubernetes Cluster

### Step 1/2: Create a Cluster on Google Kubernetes Engine (GKE)

https://console.cloud.google.com/kubernetes

Configuration:
- Name: cluster-1
- Cluster Version: 1.10.5-gke.3
- Machine type: 2vCPU (7.5 GB memory, n1-standard-2)
- Node image: Ubuntu
- Size: 3

<br>

### Step 2/2: Create a cluster-admin-binding

Get current google identity:

```
$ gcloud info | grep Account
Account: [dominik.sachsenhofer@dynatrace.com]
```

Set environment variable:

```
export EMAIL=dominik.sachsenhofer@dynatrace.com
```

Grant cluster-admin to your current identity:

```
kubectl create clusterrolebinding dynatrace-cluster-admin-binding --clusterrole=cluster-admin --user=${EMAIL}
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab5
