# Use a lightweight Node.js image
FROM node:iron-trixie-slim
RUN apt-get update -y && \
        apt-get install -y git

RUN git clone https://github.com/mosowski5-del/backendservice_firsthop.git
# Set the working directory inside the container
WORKDIR /backendservice_firsthop

# Copy package.json and package-lock.json to leverage Docker's caching
#COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
#COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
