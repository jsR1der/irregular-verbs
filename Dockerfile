FROM node:23-alpine3.19

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 3000

CMD ["sh","start"]
