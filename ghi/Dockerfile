FROM node:16-alpine

WORKDIR /ghi

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
