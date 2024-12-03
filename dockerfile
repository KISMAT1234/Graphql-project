# Use an official Node.js image as the base
FROM node:latest

# Set the working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "run", "start"]