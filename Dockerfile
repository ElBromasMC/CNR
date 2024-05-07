FROM node:22-alpine AS builder

WORKDIR /app

ARG VITE_BACKEND_URL=http://localhost:8080
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV PUBLIC_URL=/menu

# Build react app
COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN make ./build/server

# Deploy the application binary into a lean image
FROM node:22-alpine

WORKDIR /

COPY --from=builder /app/build/server /server

EXPOSE 8080

ENTRYPOINT ["/server"]
