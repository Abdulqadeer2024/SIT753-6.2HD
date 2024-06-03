# Use the official Node.js 16 image.
FROM node:16

# Create and set the working directory.
WORKDIR /usr/src/app

# Update npm to the latest version and install dependencies.
COPY package*.json ./
RUN npm install -g npm@latest && npm install

# Copy the rest of your application code.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Command to run your app.
CMD ["node", "server.js"]
