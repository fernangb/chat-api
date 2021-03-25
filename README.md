# chat-api
## API para chat online
## Tecnologias:
* Express
* TypeORM
* PostgreSQL
* Socket IO

## Instalação
### Para baixar o projeto para a sua máquina basta usar o seguinte comando:
```
git clone https://github.com/fernangb/chat-api
```
### Para instalar todos os pacotes e bibliotecas, basta rodar o seguinte comando:
```
yarn
```

## Container, docker e banco de dados
* Caso já tenha algum container de banco de dados instalado, basta configurar suas informações no arquivo ormconfig.json
* Caso não tenha, deve-se baixar o docker em https://www.docker.com/products/docker-desktop e algum programa para banco de dados, como por exemplo, o DBeaver. Com eles instalados, basta rodar o seguinte comando:
```
docker run --name chat -e POSTGRES_PASSWORD=multiplan -p 5434:5432 -d postgres
```

 A porta utilizada na máquina foi a 5434. Caso deseje em outra, basta substituir esse valor pelo desejado, mas certifique-se que ela não esteja sendo utilizada e após o comando ajustar no arquivo ormconfig.json

## Migrations
* Os principais comandos do typeorm utilizados são os seguintes:
Criação de migration:
```
yarn typeorm migration:create -n **Nome da migration**
```

Rodar as migrations:

```
yarn typeorm migration:run
```

Reverter uma migration (apenas uma por vez):
```
yarn typeorm migration:revert
```


## Rodar o programa
### Para rodar o programa, basta rodar o seguinte comando:
```
yarn dev:server
```
Caso deseje realizar alguma mudança, basta modificar o arquivo package.json, na parte de scripts

## Rotas
```
http://localhost:3333/ **rota**
```
O projeto possui as seguintes rotas:
* users (POST, GET)
* sessions (POST)
* chats (POST, GET, GET/:id)
** o usuário precisa estar autenticado para criar um chat
* chat users (POST, GET/:id, DELETE/:id)
* messages (POST, GET/:id)
* listeners (POST, GET/:id)




