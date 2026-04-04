# Stage 1: Build the React app
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx runs in the foreground by default with this base image
CMD ["nginx", "-g", "daemon off;"]
