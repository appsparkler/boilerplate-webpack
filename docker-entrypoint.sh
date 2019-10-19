#!/bin/bash
npm i -g rimraf
yarn
yarn start
exec "$@"
