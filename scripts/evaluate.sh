#!/bin/bash

if [[ -z "$(command -v C:\\Program Files\\MongoDB\\Server\\4.4\\bin\\mongo.exe)" ]]
then
    printf "You must have mongo installed in your machine"
    exit
fi

export DBNAME=dataFlights

scripts/generate_result.sh "$PWD/challenges" "$PWD/.trybe" "$PWD/assets"
