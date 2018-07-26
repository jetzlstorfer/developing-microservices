# Lab 2: Using a Container Registry

<br>

### Step 1/4: Build the image

```
sudo docker build -t sai-research/hello-world:latest .
```

<br>

### Step 2/4: Tag the image

```
sudo docker tag sai-research/hello-world:latest eu.gcr.io/sai-research/hello-world:latest 
```

<br>

### Step 3/4: Push the image to the Container Registry

```
sudo docker push eu.gcr.io/sai-research/hello-world:latest
```

<br>

### Step 4/4: Pull the image from the Container Registry

```
sudo docker pull eu.gcr.io/sai-research/hello-world:latest
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab3
