FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
EXPOSE 3000
