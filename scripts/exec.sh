#!/bin/bash

if [[ -z "$DBNAME" ]]; then
    printf "You must set envvar DBNAME"
    exit 1
fi
if [[ -z "$1"  ]]; then
    printf "You must give an MQL as the first argument"
    exit 1
fi
mql=$1

# Exec MQL
"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" $DBNAME --quiet --eval "DBQuery.shellBatchSize = 100000; DBQuery.prototype._prettyShell = true; $mql"
