FROM node:12
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "server" ]