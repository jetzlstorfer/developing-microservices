# Lab 4: Create a Kubernetes Cluster

### Step 1/8: Create a project

https://console.cloud.google.com

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

Note: Billing must be enabled in order to use Google Kubernetes Engine.

<br>

### Step 3/8: Prepare gcloud

Execute in terminal:

```
gcloud auth
```

Execute in terminal:

```
gcloud init
```

<br>

### Step 4/8: Connect to cluster

Set environment variables:

```
export CLUSTER_NAME=cluster-1
export CLUSTER_ZONE=europe-west1-b
export PROJECT=sai-research
```

Execute in terminal:

```
gcloud container clusters get-credentials ${CLUSTER_NAME} --zone ${CLUSTER_ZONE} --project ${PROJECT}
```

<br>

### Step 5/8: Verify cluster connection

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

### Step 7/8: Get resources

Execute in terminal:

```
kubectl get deployments,pods,services --all-namespaces
```

<br>

### Step 8/8: Run container/images

Execute in terminal:

```
kubectl run hello-world --image=eu.gcr.io/sai-research/hello-world:latest --port=8080 --replicas=3
kubectl expose deployment/hello-world --type="LoadBalancer" --port 8080
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab5
