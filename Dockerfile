FROM node:14.18.1-alpine as buildStage

RUN mkdir -p /home/webapp
WORKDIR /home/webapp

COPY package.json package-lock.json ./

RUN npm ci --production

COPY . ./
RUN npm run build


FROM nginx:1.21.6-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=buildStage /home/webapp/build ./