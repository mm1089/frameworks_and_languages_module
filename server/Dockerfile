FROM node

#Directory
WORKDIR /server/

#App Dependencies
COPY package*.json ./

RUN npm install

#bundling source app
COPY . .

#Expose Port 8000
EXPOSE 8000

#How to run
CMD ["node", "server.js"]
