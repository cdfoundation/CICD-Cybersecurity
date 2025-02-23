FROM floryn90/hugo:ext-alpine
USER root

RUN apk add git && \
  git config --global --add safe.directory /src
