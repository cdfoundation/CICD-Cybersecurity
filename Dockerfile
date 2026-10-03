# Use Alpine Linux version 3.21 as the base image (version pinned on the 25th of February 2025)
FROM alpine:3.21

# Must stay equal to HUGO_VERSION in netlify.toml. Netlify installs the extended edition for that version.
ARG HUGO_VERSION=0.167.0
ARG TARGETARCH

# Update package repository and install required packages:
# - ca-certificates, curl: download the official Hugo release
# - git: for version control and Hugo modules
# - go: for Hugo modules
# - libc6-compat, libstdc++: the upstream extended binary is not a musl build
# Then install Hugo Extended from the official release (Alpine's packaged Hugo is older than the module minimum).
RUN set -euxo pipefail; \
    apk update && apk add --no-cache \
        ca-certificates \
        curl \
        git \
        go \
        libc6-compat \
        libstdc++; \
    cd /tmp; \
    curl -fsSL -o "hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" \
        "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz"; \
    curl -fsSL -o checksums.txt \
        "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_checksums.txt"; \
    grep "hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" checksums.txt | sha256sum -c -; \
    tar -xzf "hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" -C /usr/local/bin hugo; \
    rm -f "hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH}.tar.gz" checksums.txt; \
    hugo version

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