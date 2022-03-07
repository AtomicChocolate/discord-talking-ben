FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Cache app source
COPY . .

# Start app
CMD [ "npm", "start" ]