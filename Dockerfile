# Step 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Setup for the server (Express.js)
FROM node:18-alpine

WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy the build from the previous step
COPY --from=build /app/build ./build

# Copy the server.js file
COPY server.js ./

# Expose the port that the app will run on
EXPOSE 5002

# Set environment variables
ENV PORT=5002
ENV SENDGRID_API_KEY=your_sendgrid_api_key_here

# Command to run the server
CMD ["node", "server.js"]
