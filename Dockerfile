FROM node:8.9.4

WORKDIR /app

ADD package.json /app
ADD yarn.lock /app

RUN yarn install

ADD . /app

EXPOSE 3000

ENV HOST 0.0.0.0
ENV PORT 3000

sudo docker build -t ReactJS

sudo docker run ReactJS