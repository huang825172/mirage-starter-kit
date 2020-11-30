FROM node:12
WORKDIR /app
COPY ./ /app

WORKDIR /app/web
RUN npm install --only=prod
RUN npm run build
RUN mv dist/* ../server/public

WORKDIR /app/server
RUN npm install --only=prod
EXPOSE 8080

ENTRYPOINT npm run start