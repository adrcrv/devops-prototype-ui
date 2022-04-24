#!/bin/bash

id=''
password=''
repository=''
tag=''
docker_file=''

arguments_parse() {
  while [ $# -gt 0 ]; do
    declare -n key="${1//--/}"
    value=$2

    if [[ $value == *"--"* || -z "$value" ]]; then
      shift # past argument
      continue
    fi

    # shellcheck disable=SC2034
    key="$value"
    shift # past argument
    shift # past value
  done
}

login() {
  echo "$password" | docker login --username "$id" --password-stdin
}

build() {
  docker build --shm-size 1G -t "$id"/"$repository":"$tag" . -f "$docker_file"
}

push() {
  docker push "$id"/"$repository":"$tag"
}

arguments_parse "$@"
login
build
push
