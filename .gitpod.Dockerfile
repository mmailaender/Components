FROM gitpod/workspace-full:latest

SHELL ["bash", "-lic"]
RUN npx --yes @teambit/bvm install && source ~/.bashrc
