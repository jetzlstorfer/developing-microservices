# Lab 6: Instrument a Kubernetes Cluster with Dynatrace

In this lab you will learn how to instrument a Kubernetes Cluster with Dynatrace.

<br>

### Step 6.1: Create Dynatrace Tenant 

Bring your own license - get it here: [Dynatrace Free Trial](https://www.dynatrace.com/trial/)

<br>

### Step 6.2: Install

Reference: https://github.com/Dynatrace/dynatrace-oneagent-operator

Execute in terminal:

```
kubectl create -f https://raw.githubusercontent.com/Dynatrace/dynatrace-oneagent-operator/master/deploy/kubernetes.yaml
```

<br>

### Step 6.3: Create secret

Execute in terminal:

```
export DYNATRACE_API_TOKEN=your-api-token
export PLATFORM_AS_A_SERVICE_TOKEN=your-paas-token

kubectl -n dynatrace create secret generic oneagent --from-literal="apiToken=${DYNATRACE_API_TOKEN}" --from-literal="paasToken=${PLATFORM_AS_A_SERVICE_TOKEN}"
```

<br>

### Step 6.4: Create configuration 

Create cr.yaml file:

```
apiVersion: dynatrace.com/v1alpha1
kind: OneAgent
metadata:
  name: oneagent
  namespace: dynatrace
spec:
  apiUrl: https://qji38429.sprint.dynatrace.com/api
  skipCertCheck: false
  tokens: ""
  nodeSelector: {}
  tolerations: []
  image: ""
  args:
  - APP_LOG_CONTENT_ACCESS=1
  env: []
```

<br>

### Step 6.5: Create custom resource

Execute in terminal:

```
kubectl create -f cr.yaml
```

