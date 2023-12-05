FROM node:latest

WORKDIR /server/

COPY . /server/

RUN npm install

CMD ["npm", "run", "prod"]

EXPOSE 4009