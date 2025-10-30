FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm run test
RUN npm run start

ENV NODE_ENV=development
ENV NODE_OPTIONS=--dns-result-order=ipv4first


EXPOSE 3000
CMD ["npm", "start"]
