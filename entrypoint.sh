#!/bin/sh

set -o errexit

cmd="$@"

>&2 echo -e "\n!!! Check postgres server for available !!!"

until npm run typeorm query "SELECT COUNT(*) as Number_of_tables FROM information_schema.tables WHERE table_schema = current_schema()"
do
  >&2 echo -e "\n!!! Postgres is unavailable - waiting !!!"
  sleep 1
done

>&2 echo -e "\n!!! Postgres is up - checking database migration !!!"

npm run typeorm migration:run

exec $cmd