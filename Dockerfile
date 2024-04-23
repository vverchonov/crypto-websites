# Build Stage
FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve Stage
FROM node:alpine as runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN apk add --no-cache nodejs npm
COPY --from=runner /app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]