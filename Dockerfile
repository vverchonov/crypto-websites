# Build Stage
FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Stage
FROM node:16-alpine
ENV NODE_ENV=production
COPY package*.json ./

COPY ./.next ./.next
COPY ./next.config.js ./next.config.js
COPY ./public ./public
COPY ./.next/static ./_next/static
COPY ./node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]