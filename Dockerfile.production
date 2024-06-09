FROM node:18-slim  as builder

WORKDIR /usr/src/app


COPY package*.json ./

RUN yarn install

COPY . .

# RUN yarn --omit=dev

RUN yarn build

# RUN ls -a


FROM node:18-slim as production

# RUN sh ./rm.sh

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main.js"]