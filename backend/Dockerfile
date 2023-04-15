FROM node

WORKDIR /app

COPY package.json /app

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

VOLUME [ "/app" ]

CMD ["npm", "run", "start:dev"]
