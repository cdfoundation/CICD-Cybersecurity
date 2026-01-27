# Contributing to the CI/CD Cybersecurity Guide

## Dockerfile and Docker Compose alternative
Please note that the Dockerfile and Docker Compose instructions are currently supported for the CI/CD Cybersecurity Guide, so that serves an alternative to the steps below where the dependencies are installed locally on your machine.

## Get Started with Local Development
If you are running the CI/CD Cybersecurity Guide locally, you can build the site, index its pages for search, and preview the site in your browser:
1. Make sure you have [Hugo](https://gohugo.io/getting-started/installing/) and [Go](https://go.dev/doc/install) installed.
2. Clone the repository:
   ```bash
   git clone
   ```
3. Install dependencies using `npm`:
   ```bash
   npm install
   ```
4. Generate a build by running the following command in your terminal:
   ```bash
   hugo
   ```
5. Once the build is ready, start the Hugo server with the following command:
   ```bash
   hugo server
   ```
   Now the Hugo development server is running.
6. Open the address `http://localhost:1313` in your web browser to load the CI/CD Cybersecurity Guide homepage. You can now make changes to the source files, and those changes will be live-reloaded in your browser.
