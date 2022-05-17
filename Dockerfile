# Base image
FROM node:18-alpine3.15

# Create a directory to store 
RUN mkdir -p /usr/src/app  

# set workdir
WORKDIR /usr/src/app  

# copy the contents of the current directory
COPY . /usr/src/app

#Expose port 3000
EXPOSE 3000  

# Run the Node instance
CMD ["npm", "start"]  