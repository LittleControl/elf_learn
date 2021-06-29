#!/bin/bash

echo $DIR
python3 -m venv venv

./venv/bin/pip install Flask lief flask_cors

export FLASK_ENV=development
export FLASK_APP=app
./venv/bin/flask run &
cd ../fe/build
echo $DIR
../../be/venv/bin/python3 -m http.server 8081
