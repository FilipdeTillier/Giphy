FROM node:12
WORKDIR /
COPY ./server/package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "server" ]