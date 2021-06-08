FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7001

CMD ["node", "app.js"]