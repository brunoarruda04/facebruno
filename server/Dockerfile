FROM node:16.16.0

WORKDIR /app/backend

EXPOSE 3001

COPY ./package.json ./

RUN npm install bcrypt

RUN npm install

COPY . .

CMD ["sh", "-c", "npm start"]