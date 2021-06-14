#stage 1
FROM node:14-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:1.15.8-alpine
COPY --from=node /app/dist/solmet /usr/share/nginx/html
