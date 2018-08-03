# Requirements

<br>

### Requirements:

- Google Cloud Platform Account
- git
- docker
- gcloud
- kubectl

<br>

### Step 1: Create a Google Cloud Platform Account:

Create an account.

Reference: https://cloud.google.com

<br>

### Step 2: Install git:

Install git.

Reference: https://git-scm.com/downloads

Verify installation:

```
$ git --version
git version 2.15.2 (Apple Git-101.1)
```

<br>

### Step 3: Install docker:

Install docker.

Reference: https://www.docker.com

Verify installation:

```
$ sudo docker --version
Docker version 18.03.1-ce, build 9ee9f40
```

<br>

### Step 4: Install gcloud:

Install gcloud.

Reference: https://cloud.google.com/sdk/gcloud/

Then execute in terminal:

```
sudo gcloud components update
```

<br>

### Step 5: Install kubectl:

Execute in terminal:

```
sudo gcloud components install kubectl
```

<br>

### Step 6: Clone repository:

Execute in terminal:

```
git clone https://github.com/dynatrace-innovationlab/developing-microservices.git
```

<br>

### Step 7: Prepare gcloud:

Execute in terminal:

```
gcloud auth
```

Execute in terminal:

```
gcloud init
```

Execute in terminal:

```
gcloud auth configure-docker
```

<br>

### Step 8: Clone repository:

Execute in terminal:

```
git clone https://github.com/dynatrace-innovationlab/developing-microservices.git
```
