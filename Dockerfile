FROM node:24-alpine

COPY package.json package.json
COPY index.js index.js
COPY package-lock.json package-lock.json

RUN npm install

CMD ["node", "index.js"]