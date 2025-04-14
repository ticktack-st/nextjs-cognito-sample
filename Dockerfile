FROM node:23-bookworm-slim
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /app
EXPOSE 3000

RUN npm install -g npm@11.3
RUN npm update
