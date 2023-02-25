FROM node:16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

COPY package.json /usr/src/app/package.json
RUN npm install -g npm@9.5.1
RUN npm install -g @angular/cli
CMD ["ng" , "serve" , "--host", "0.0.0.0"]
