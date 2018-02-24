FROM node:slim

RUN apt-get update \
    && apt-get install -y nginx

WORKDIR /app

COPY . /app/

EXPOSE 80

RUN yarn install \
    && npm run build \
    && cp -r dist/* /var/www/html \
    && rm -rf /app

CMD ["nginx", "-g", "deamon off;"]