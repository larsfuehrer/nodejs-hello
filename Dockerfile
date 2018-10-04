
FROM ubuntu:trusty

MAINTAINER Lars Fuehrer lars.fuehrer@gmail.com

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs vim

# Bundle app source
COPY . /src

# Install app dependencies
RUN cd /src; npm install

EXPOSE  8001

#run start script
CMD ["node","/src/index.js"]
