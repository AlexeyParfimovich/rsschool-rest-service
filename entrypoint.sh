#!/bin/sh

set -e

host="postgres"
port="5432"
cmd="$@"

>&2 echo "!!!!!!!! Check postgres for available !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

exec $cmd