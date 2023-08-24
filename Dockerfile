###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18.16 AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

USER node
