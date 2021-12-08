FROM node:12

ENV PORT 80

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app
RUN yarn install --production

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 80

# Running the app
CMD [ "yarn", "client" ]
