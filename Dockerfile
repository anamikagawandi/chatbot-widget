# Use a Node.js image as the base
FROM node:14-alpine

# Create and set the working directory
WORKDIR /app

# Copy the package.json files for the server and client
COPY ./server/package*.json ./

# Install server dependencies
RUN npm install

# Change directory to the client folder
WORKDIR /app/client

# Copy the package.json and package-lock.json files for the client
COPY ./client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client code
COPY ./client/ .

# Change directory back to the root app folder
WORKDIR /app

# Copy the rest of the server code
COPY ./server .

# Build the React client
RUN npm build

# Expose the server's port
EXPOSE 8080

# Start the server
CMD [ "npm", "start" ]