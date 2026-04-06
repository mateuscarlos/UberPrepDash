# Stage 1: Build the React app
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies (inclui devDependencies como vite e prisma cli)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Generate Prisma Client (precisa estar nesse stage para compilar os engines)
RUN npx prisma generate

# Build the production bundle
RUN npm run build

# Stage 2: Serve with Node & Express
FROM node:22-alpine

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy generated Prisma Client and Prisma Schema
COPY --from=build /app/src/generated/prisma ./src/generated/prisma
COPY prisma ./prisma

# Copy Backend Server
COPY server.js ./

# Copy compiled Frontend 
COPY --from=build /app/dist ./dist

# Create volume dir and ensure permissions
RUN mkdir -p /app/database && chown node:node /app/database

# Switch to non-root user for security
USER node

EXPOSE 80

# Run the express server
CMD ["node", "server.js"]
