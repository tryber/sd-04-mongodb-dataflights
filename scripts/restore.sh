#!/bin/bash

if [[ -z "$DBNAME" ]]; then
    printf "You must set envvar DBNAME"
    exit 1
fi
if [[ -z "$1" ]]; then
    printf "You must pass the BSON path as the first argument"
    exit 1
fi
BSON_PATH=$1

# Restore collection
"C:\Program Files\MongoDB\Server\4.4\bin\mongorestore.exe" --maintainInsertionOrder --db "$DBNAME" "$BSON_PATH"
