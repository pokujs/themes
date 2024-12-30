#!/bin/bash

find_file() {
  local error_stack="$1"
  local base_path="poku/lib/"
  local regex="file:(.+)"

  while IFS= read -r line; do
    if [[ "$line" == *"$base_path"* ]]; then
      continue
    fi

    if [[ "$line" =~ $regex ]]; then
      echo "${BASH_REMATCH[1]}"
      return 0
    fi
  done <<<"$error_stack"

  return 1
}
