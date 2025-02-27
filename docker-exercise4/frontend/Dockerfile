FROM node:18
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN 3004

CMD ["npm", "start"]