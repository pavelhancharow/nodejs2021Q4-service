FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY ["package*.json", "./"]

RUN npm install && npm audit fix --force && npm cache clean --force

COPY . .

CMD [ "npm", "run", "start:docker" ]
