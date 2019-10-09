FROM node:latest
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package.json /usr/src/app
# COPY package.json package.json
COPY ./ /usr/src/app
RUN npm install -g sails 
RUN npm install --save
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
# COPY . .
EXPOSE 1337
CMD [ "sails", "lift" ]

# FROM node:12.9.1
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install 
# RUN npm install sails -g
# RUN npm install sails-mysql
# COPY . /usr/src/app
# CMD ["sails","lift"]

# FROM node:latest

# RUN npm install -g sails grunt npm-check-updates

# COPY ./package.json /package.json
# RUN npm install
# RUN npm install --save sails-postgresql@beta

# COPY ./compose/sails/entrypoint.sh /entrypoint.sh
# RUN sed -i 's/\r//' /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# COPY ./compose/sails/start-dev.sh /start-dev.sh
# RUN sed -i 's/\r//' /start-dev.sh
# RUN chmod +x /start-dev.sh

# WORKDIR /app

# ENTRYPOINT ["/entrypoint.sh"]
