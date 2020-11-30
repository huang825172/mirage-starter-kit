FROM node:12

WORKDIR /app/web
COPY ./web/package*.json ./
RUN npm install

WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm install

WORKDIR /app
COPY ./ ./

WORKDIR /app/web
RUN npm run build
RUN mv dist/* ../server/public

WORKDIR /app/server
RUN npm install --only=prod
EXPOSE 8080

ENTRYPOINT npm run start