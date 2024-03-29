# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build:docker

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory

#RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/nginx/default.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]