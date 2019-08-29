FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN npm install -g yarn 
RUN npm install -g ts-node

RUN yarn

COPY . .

EXPOSE 3000