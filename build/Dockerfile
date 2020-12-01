FROM node:12

WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=prod
COPY ./server .

EXPOSE 8080
ENTRYPOINT export MIRAGE_DB_CONNECT=$(cat db_url); npm run start