# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=24

FROM oven/bun:alpine AS bun

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS development
ENV NODE_ENV=development
ENV NG_CLI_ANALYTICS=false
RUN addgroup -S -g 10001 app && adduser -S -u 10001 -G app app \
  && chown -R app:app /app

USER app

EXPOSE 4200
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]

FROM base AS build
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY --from=build /app/dist ./dist

RUN addgroup -S -g 10001 app && adduser -S -u 10001 -G app app \
  && chown -R app:app /app

USER app

LABEL service=zii-landing-service

EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget -qO- http://localhost:4000/up || exit 1
CMD ["node", "dist/zii-landing/server/server.mjs"]
