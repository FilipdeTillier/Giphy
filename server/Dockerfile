FROM node:12

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD server/package.json /src/package.json
RUN npm install

COPY ./server /src

CMD [ "npm", "run", "server" ]