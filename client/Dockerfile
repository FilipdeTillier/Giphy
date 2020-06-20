FROM node:12
WORKDIR /client
COPY ./client/package*.json ./
RUN npm install
COPY ./client /client
CMD [ "npm", "run", "client" ]