# Lab 1: Container and containerized apps

In this lab you will learn how to use container and build containerized apps.

<br>

### Step 1: Create a Python Web application

File: directory/app.py

```
from flask import Flask 
app = Flask(__name__) 

@app.route("/")
def hello(): 
   return "Hello World!"

if __name__ == '__main__':
   app.run(debug=False, host='0.0.0.0', port=8080)
```

<br>

### Step 2: Create a requirements.txt

File: directory/requirements.txt

```
flask==0.10.1
```

<br>

### Step 3: Create a Dockerfile

File: directory/Dockerfile

```
FROM ubuntu:latest 
RUN apt-get update 
RUN apt-get install -y python-pip python-dev build-essential wget curl
COPY . /app 
WORKDIR /app 
RUN pip install -r requirements.txt 
EXPOSE 8080 
ENTRYPOINT ["python"] 
CMD ["app.py"]
```

<br>

### Step 4: Build the Docker container

```
docker build -t sai-research/hello-world:latest .
```

<br>

### Step 5: Run the Docker container

```
docker run -p 8080:8080 sai-research/hello-world:latest
```

<br>
<br>

__Next Lab:__

https://github.com/dynatrace-innovationlab/developing-microservices/tree/master/lab2
