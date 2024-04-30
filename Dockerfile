# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN apk add --no-cache python3 py3-pip make g++ linux-headers eudev-dev \
    && ln -sf python3 /usr/bin/python

RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Next.js application
RUN npm run build

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]