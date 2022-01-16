FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY ["package*.json", "./"]

RUN npm ci && npm cache clean --force

COPY . .

CMD [ "npm", "start"  ]
