# developing-microservices

This is the home of the Dynatrace Developing Microservices workshop.

Information: dominik.sachsenhofer@dynatrace.com

<br>
<br>

# Lab 2: Using a Container Registry

### Step 1/4: Build the image

```
sudo docker build -t sai-research/hello-world:latest .
```

### Step 2/4: Tag the image

```
sudo docker tag sai-research/hello-world:latest eu.gcr.io/sai-research/hello-world:latest 
```

### Step 3/4: Push the image to the Container Registry

```
sudo docker push eu.gcr.io/sai-research/hello-world:latest
```

### Step 4/4: Pull the image from the Container Registry

```
sudo docker pull eu.gcr.io/sai-research/hello-world:latest
```
