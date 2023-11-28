FROM gitpod/workspace-full:latest

RUN SHELL=$(which bash) npx --yes @teambit/bvm install && source ~/.bashrc
