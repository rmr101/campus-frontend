

FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn --silent
COPY ./ ./
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
