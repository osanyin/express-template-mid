FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN npm install -g yarn 
RUN yarn

COPY . .

EXPOSE 3000