FROM node:16-alpine

ARG RELEASE_DATE
ARG PORT

ENV NODE_ENV=production
ENV NEXT_PUBLIC_LAST_UPDATE=$RELEASE_DATE
ENV PORT=$PORT

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY . .
RUN yarn build

EXPOSE 80 443

CMD ["node", "server.js"]
