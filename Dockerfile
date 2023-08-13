FROM node:14

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 1337

CMD [ "npm", "start" ]