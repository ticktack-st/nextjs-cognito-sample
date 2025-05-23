FROM node:23-bookworm-slim
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /app
EXPOSE 3000

RUN apt-get update && apt-get install -y \
    vim \
    curl \
    less \
    zip \
    awscli
RUN npm install -g npm \
    && npm install -g @aws-amplify/cli \
    && npm install -g npm-check-updates \
    && npm install -g typescript \
    && npm install -g prettier
