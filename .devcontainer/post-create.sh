#!/bin/sh

set -e

sudo npm uninstall -g pnpm
sudo corepack enable

pnpm install
