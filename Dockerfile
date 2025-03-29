FROM node:22-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install
RUN npm i -g serve

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]