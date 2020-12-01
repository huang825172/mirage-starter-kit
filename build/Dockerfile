FROM node:12

WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=prod
COPY ./server /app
RUN db_url=$(cat mysql_url)
ENV MIRAGE_DB_CONNECT=$db_url

EXPOSE 8080
ENTRYPOINT npm run start