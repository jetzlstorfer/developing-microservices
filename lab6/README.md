# Lab 6: Instrument a Kubernetes Cluster with Dynatrace

<br>

### Step 1/4: Install 

Execute in terminal:

```
kubectl create -f https://raw.githubusercontent.com/Dynatrace/dynatrace-oneagent-operator/master/deploy/kubernetes.yaml
```

### Step 2/4: Create secret

Execute in terminal:

```
PLATFORM_AS_A_SERVICE_TOKEN=[PLATFORM_AS_A_SERVICE_TOKEN]
DYNATRACE_API_TOKEN=[DYNATRACE_API_TOKEN]

kubectl -n dynatrace create secret generic oneagent --from-literal="apiToken=${DYNATRACE_API_TOKEN}" --from-literal="paasToken=${PLATFORM_AS_A_SERVICE_TOKEN}"
```

### Step 3/4: Create configuration 

Creat cr.yaml file:

```
apiVersion: dynatrace.com/v1alpha1
kind: OneAgent
metadata:
  name: oneagent
  namespace: dynatrace
spec:
  apiUrl: https://ENVIRONMENTID.live.dynatrace.com/api
  skipCertCheck: false
  tokens: ""
  nodeSelector: {}
  tolerations: []
  image: ""
  args:
  - APP_LOG_CONTENT_ACCESS=1
  env: []
```

### Step 4/4: Create custom resource

Execute in terminal:

```
kubectl create -f cr.yaml
```
