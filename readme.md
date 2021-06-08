## tutorial para rodar o projeto

## comando para instalar as dependências do projeto
- npm install

## comando para criar o container docker
- sudo docker build -t docker-node .

## comando para rodar o container docker
- sudo docker run -p 3000:7001 -d docker-node
