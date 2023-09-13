FROM node:18

WORKDIR /src

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run lint

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
