# Lab 6: Instrument a Kubernetes Cluster with Dynatrace

<br>

### Step 1/5: Create Dynatrace Tenant 

Type: Sprint Tenant

User: developing-microservices@dynatracelabs.com

Password: developing-microservices@dynatracelabs.com+A0

<br>

### Step 2/5: Install 

Execute in terminal:

```
kubectl create -f https://raw.githubusercontent.com/Dynatrace/dynatrace-oneagent-operator/master/deploy/kubernetes.yaml
```

<br>

### Step 3/5: Create secret

Execute in terminal:

```
PLATFORM_AS_A_SERVICE_TOKEN=[PLATFORM_AS_A_SERVICE_TOKEN]
DYNATRACE_API_TOKEN=[DYNATRACE_API_TOKEN]

kubectl -n dynatrace create secret generic oneagent --from-literal="apiToken=${DYNATRACE_API_TOKEN}" --from-literal="paasToken=${PLATFORM_AS_A_SERVICE_TOKEN}"
```

<br>

### Step 4/5: Create configuration 

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

<br>

### Step 5/5: Create custom resource

Execute in terminal:

```
kubectl create -f cr.yaml
```
