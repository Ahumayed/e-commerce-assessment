
FROM node:18-alpine
 
WORKDIR /src/app
 
COPY . .
 
RUN npm ci --force --omit=dev

RUN npm install -g @nestjs/cli
 
RUN npm run build
 
USER node
 
CMD [ "npm", "run", "start:prod" ]
