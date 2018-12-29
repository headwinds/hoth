# Viper Proble

## Tech
* Python
* Vue 
* Twitter API with Flask Dance

![Alt text](probe.jpg?raw=true)  

## Getting Started

### Build the Vue 

```
yarn build
```

This will create a dist directory with the static content 

```
pip install -r requirements.txt
python run.py
```

Open to http://127.0.0.1:5000 not localhost!

### Docker

```
docker build -t probe .
docker run -p 5000:5000 probe
```

To see that the docker is running: `docker image ls`

# Credit

[flask-vuejs-template](https://github.com/gtalarico/flask-vuejs-template)