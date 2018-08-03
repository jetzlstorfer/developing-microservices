# Lab 2: Using a Container Registry

<br>

### Step 2.1: Build the image

```
sudo docker build -t sai-research/hello-world:latest .
```

<br>

### Step 2.2: Tag the image

```
sudo docker tag sai-research/hello-world:latest eu.gcr.io/sai-research/hello-world:latest 
```

<br>

### Step 2.3: Push the image to the Container Registry

Note: Google Container Registry must be enabled.

```
sudo docker push eu.gcr.io/sai-research/hello-world:latest
```

<br>

### Step 2.4: Pull the image from the Container Registry

```
sudo docker pull eu.gcr.io/sai-research/hello-world:latest
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab3
