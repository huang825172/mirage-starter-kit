FROM node:lts-alpine

WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=prod
COPY ./server .

EXPOSE 8080
ENTRYPOINT npm run start