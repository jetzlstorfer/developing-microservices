FROM ubuntu:latest 
RUN apt-get update 
RUN apt-get install -y python-pip python-dev build-essential wget curl 
COPY . /app 
WORKDIR /app 
RUN pip install -r requirements.txt 
EXPOSE 8080 
ENTRYPOINT ["python"] 
CMD ["app.py"]
