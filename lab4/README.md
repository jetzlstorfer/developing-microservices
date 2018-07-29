# Lab 4: Create a Kubernetes Cluster

### Step 1/8: Create a project

https://console.cloud.google.com/

Create a Google Cloud project.

<br>

### Step 2/8: Create a Cluster on Google Kubernetes Engine (GKE)

https://console.cloud.google.com/kubernetes

Configuration:
- Name: cluster-1
- Cluster Version: 1.10.5-gke.3
- Machine type: 2vCPU (7.5 GB memory, n1-standard-2)
- Node image: Ubuntu
- Size: 3

IMPORTANT: Billing must be enabled in order to use Google Kubernetes Engine.

<br>

### Step 3/8: Initialize gcloud

Execute in terminal:

```
gcloud initialize
```

<br>

### Step 4/8: Set environment variables

Execute in terminal:

```
export CLUSTER_NAME=cluster-1
export CLUSTER_ZONE=europe-west1-b
export PROJECT=sai-research
```

<br>

### Step 5/8: Connect to cluster

Execute in terminal:

```
gcloud container clusters get-credentials ${CLUSTER_NAME} --zone ${CLUSTER_ZONE} --project ${PROJECT}
```

<br>

### Step 6/8: Create a cluster-admin-binding

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

### Step 7/8: Verify cluster

Execute in terminal:

```
$ kubectl cluster-info
Kubernetes master is running at https://35.240.20.43
GLBCDefaultBackend is running at https://35.240.20.43/api/v1/namespaces/kube-system/services/default-http-backend:http/proxy
Heapster is running at https://35.240.20.43/api/v1/namespaces/kube-system/services/heapster/proxy
KubeDNS is running at https://35.240.20.43/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://35.240.20.43/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
```

<br>

### Step 8/8: Get resources

Execute in terminal:

```
kubectl get deployments,pods,services --all-namespaces
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab5
