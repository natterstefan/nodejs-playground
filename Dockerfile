ARG node_version=14.15
ARG node_image=node:${node_version}-alpine

FROM $node_image

# configs and dependency handling
COPY package.json yarn.lock ./

# install all dependencies
RUN yarn install --frozen-lockfile --production=false --no-progress --ignore-engines --ignore-optional

# source code of the app
COPY src/ ./src/

# run the app
EXPOSE 3000
RUN ls -lh
CMD ["node", "."]
