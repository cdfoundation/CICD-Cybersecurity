# Use Alpine Linux version 3.21 as the base image (version pinned on the 25th of February 2025)
FROM alpine:3.21

# Update package repository and install required packages:
# - git: for version control
# - go: for the Go programming language
# - hugo: for static site generation
RUN apk update && apk add --no-cache \
    git \
    go \
    hugo

# Create the site directory
RUN mkdir -p /site

# Configure Git to mark the site directory as a safe directory
RUN git config --global --add safe.directory /site

# Set the working directory to the site directory
WORKDIR /site

# Expose Hugo's default server port
EXPOSE 1313

# Define the default command to start the Hugo server when the container runs
CMD ["hugo", "serve", "--bind", "0.0.0.0", "--baseURL", "http://localhost"]

# To build and run this container do:
# docker build -t cicd-sig-cybersecurity-hugo-dev .
# docker run -p 1313:1313 -v $(pwd):/site cicd-sig-cybersecurity-hugo-dev