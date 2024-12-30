#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <package-name>"
  exit 1
fi

BASE_DIR=$(pwd)
TARGET_DIR=./packages/$1

mkdir -p $TARGET_DIR/.vscode

ln -s $BASE_DIR/.editorconfig $TARGET_DIR/.editorconfig
ln -s $BASE_DIR/.gitignore $TARGET_DIR/.gitignore
ln -s $BASE_DIR/.vscode/settings.json $TARGET_DIR/.vscode/settings.json
ln -s $BASE_DIR/.prettierrc $TARGET_DIR/.prettierrc
ln -s $BASE_DIR/.examples $TARGET_DIR/.examples

touch $TARGET_DIR/.prettierignore $TARGET_DIR/README.md

echo "✅ \"$TARGET_DIR\" initialized."
