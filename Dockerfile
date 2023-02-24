# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages
RUN npm install

# Build the Angular app
RUN npm run build --prod

# Expose port 80 to the outside world
EXPOSE 80

# Define environment variables
ENV NODE_ENV=production

# Start Nginx and serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
