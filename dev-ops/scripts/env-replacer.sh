#!/bin/bash

template=$1
file=$2

cat $template > $file

environments=$(cat $file | grep -o '\$[^ ]*' | sort -u)

for environment in $environments; do
  key="${environment:1}"
  value="${!key}"
  sed -i "s/$environment/$value/g" $file
done