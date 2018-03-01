FROM node:slim

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --registry=https://registry.npm.taobao.org --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver

COPY . /app/

RUN npm run build \
    && mkdir ../mytemp \
    && cp -r dist/* ../mytemp \
    && rm -rf /app

FROM nginx

COPY --from=0  /mytemp/ /usr/share/nginx/html 

EXPOSE 8000