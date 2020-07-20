FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY ./package-lock.json ./
RUN yarn --silent
COPY . ./
RUN yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
# for React Router
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
