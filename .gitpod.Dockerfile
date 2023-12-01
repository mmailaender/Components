FROM gitpod/workspace-full:latest

SHELL ["bash", "-lic"]
RUN npx --yes @teambit/bvm install &&\
    echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc &&\
    source ~/.bashrc &&\
    bit config set analytics_reporting false &&\
    bit config set anonymous_reporting false