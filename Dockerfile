FROM node:20.11.0-alpine3.19

WORKDIR /app
COPY . .

RUN wget "https://storage.googleapis.com/kubernetes-release/release/$(wget -qO - https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl" && \
    mv kubectl /usr/bin/kubectl && \
    chmod +x /usr/bin/kubectl

ENTRYPOINT ["./entrypoint.sh"]
