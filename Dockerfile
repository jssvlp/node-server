FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY /build-admin /usr/src/app/build-admin
COPY /build-client /usr/src/app/build-client
COPY server.js /usr/src/app
COPY package.json /usr/src/app

RUN npm install

EXPOSE 8080
CMD ["npm","start"]
