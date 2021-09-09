#!/usr/bin/env bash
#
sed -i '5i\  "homepage": "http://visuallyexplained.github.io/react-website",' ./package.json
sed -i '15i\    "predeploy": "npm run build",' ./package.json
sed -i '16i\    "deploy": "gh-pages -d build",' ./package.json
