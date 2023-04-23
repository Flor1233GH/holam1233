# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

#dockerfile debe exponer un puerto  tcp
RUN -p 8080:80 -p 3000:3000 app

# Define the entry point for the container
CMD ["npm", "start"]
