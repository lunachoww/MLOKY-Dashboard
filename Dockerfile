# pull official base image
FROM node:alpine

RUN apk add --no-cache git openssh

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# copy app
COPY . ./

# start app
CMD ["yarn", "dev"]