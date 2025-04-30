# Step 1: Use an official Node.js runtime as a base image
FROM node:22

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Build the TypeScript code
RUN npm run build

# Step 7: Expose port 3000 to the outside world
EXPOSE 3000

# Step 8: Define the command to run the application
CMD ["npm", "run", "start:prod"]
