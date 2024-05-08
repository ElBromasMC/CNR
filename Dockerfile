FROM node:22-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

# Frontend env variables
ARG VITE_BACKEND_URL=http://localhost:8080
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV PUBLIC_URL=/menu

# Frontend build dependencies
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --include=dev

# Webserver dependencies
WORKDIR /app/webserver
COPY webserver/package.json webserver/package-lock.json ./
RUN npm ci --omit=dev

# Build frontend
WORKDIR /app/frontend
COPY frontend/ ./
RUN npm run build

# Copy and run the webserver
WORKDIR /app/webserver
COPY webserver/ ./
EXPOSE 8080
CMD [ "node", "index.js" ]
