# Lab 5: Create a Kubernetes Cluster

### Step 1/5: Create a cluster-admin-binding

Get current google identity:

```
$ gcloud info | grep Account
Account: [EMAIL]
```

Set environment variable:

```
export EMAIL=dominik.sachsenhofer@dynatrace.com
```

Grant cluster-admin to your current identity:

```
kubectl create clusterrolebinding dynatrace-cluster-admin-binding --clusterrole=cluster-admin --user=${EMAIL}
```
