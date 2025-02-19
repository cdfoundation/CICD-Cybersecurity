# Use Ubuntu as the base image
FROM ubuntu:latest

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install required dependencies
RUN apt update && apt install -y \
    curl \
    git \
    nodejs \
    npm \
    golang \
    hugo \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages
RUN npm install -g sass autoprefixer postcss-cli postcss

# Set the work directory to a mountable location
WORKDIR /site

# Fix Git ownership issue inside the container
RUN git config --global --add safe.directory /site

# Expose the default Hugo server port
EXPOSE 1313

# Start Hugo server when the container runs
CMD ["hugo", "serve", "--bind", "0.0.0.0", "--baseURL", "http://localhost"]

# To build and run this container do:
# docker build -t cicd-sig-cybersecurity-hugo-dev .
# docker run -p 1313:1313 -v $(pwd):/site cicd-sig-cybersecurity-hugo-dev