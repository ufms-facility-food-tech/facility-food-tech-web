FROM node:lts-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM caddy:alpine
COPY --from=node /build/client /srv
EXPOSE 80
