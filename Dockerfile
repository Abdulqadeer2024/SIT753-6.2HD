# Use a specific version of node
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install npm at the latest version
RUN npm install -g npm@latest

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
