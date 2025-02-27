# Stage 1: Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Stage 2: Production image
FROM node:18
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 5004
CMD ["node", "server.js"]
