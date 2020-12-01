FROM node:12

WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=prod
COPY ./server .
ENV MIRAGE_DB_CONNECT=$(cat db_url)
RUN echo $MIRAGE_DB_CONNECT

EXPOSE 8080
ENTRYPOINT npm run start