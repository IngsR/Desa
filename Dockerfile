# Step 1: Build Image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build Next.js project
RUN npm run build

# Step 2: Production Image
FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose default Next.js port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]
