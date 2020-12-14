FROM node:14

WORKDIR /Users/christopherhancock/Desktop/HRSEA13/carousel-service

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]