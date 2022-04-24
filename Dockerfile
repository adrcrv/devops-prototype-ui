FROM node:16-alpine

ENV NODE_ENV=production
ENV NEXT_PUBLIC_LAST_UPDATE=$(date)

WORKDIR /usr/src/app

COPY package.json yarn.lock .
RUN yarn install --frozen-lockfile --production

COPY . .
RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]
