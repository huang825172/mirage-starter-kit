FROM node:12

WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=prod
COPY ./server /app
RUN export MIRAGE_MYSQL_CONNECT=$(cat mysql_url)

EXPOSE 8080
ENTRYPOINT npm run start