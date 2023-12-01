FROM gitpod/workspace-full:latest

SHELL ["bash", "-lic"]
RUN npx --yes @teambit/bvm install && echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
