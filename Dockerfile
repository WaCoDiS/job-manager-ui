### STAGE 1: Build ###
FROM node:12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

### STAGE 2: Run ###
FROM nginx:1.17.8-alpine
# uses the configuration file 'nginx.conf' in this project
COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=builder /app/dist/angular-wacodis-job-scheduler /usr/share/nginx/html
CMD sed -i -e 's/MYPORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

## Run application with:
## docker run --rm -it --name app-job-manager-container -e PORT=80 -p 8080:80 wacodis/job-manager-ui
