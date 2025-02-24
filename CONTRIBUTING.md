# Testing website contributions locally

This website uses [Docsy](https://github.com/google/docsy-example), which is itself based on Hugo and Netlify. 

The easiest way to test your changes before submitting a pull requests is using docker-compose or podman-compose.

## Install prereqs

- First, install [docker-compose](https://github.com/docker/compose)
- Second, optionally, install [podman-compose](https://www.redhat.com/en/blog/podman-docker-compose) 

## Build the container

Using docker-compose:
```
docker-compose build
```

Or using podman-compose: 
```
podman-compose build
```

The build command should generate the container. Sample output from `podman image list`: 
```
podman image list
REPOSITORY                                     TAG               IMAGE ID      CREATED             SIZE
localhost/docsy/docsy-example                  latest            54fc87c22dff  About a minute ago  627 MB
```

## Start the local website

Using docker-compose:
```
docker-compose up
```

Or using podman-compose: 
```
podman-compose up
```

The up command should start the website on localhost. Sample output from the up command: 
```
[site] | Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
[site] | Web Server is available at //localhost:1313/ (bind address 0.0.0.0) 
[site] | Press Ctrl+C to stop
```

Then open the website on your browser using the link provided in the Hugo output, such as `http://localhost:1313/`
