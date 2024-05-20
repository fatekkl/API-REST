# API Express

## Descrição

API desenvolvida utilizando Node.js (ES6) e Express, com o objetivo de estudar o protocolo HTTP e criptografia.

## Requisitos

- Node.js (versão LTS)
- npm (versão LTS)

## Instruções para Testar a API

1. Clone o repositório:
   ```bash
   git clone https://github.com/fatekkl/API-REST.git


2. Instale as libs necessárias:
   ````bash
   npm install express
   npm install nodemon
   npm install fs
   npm install crypto


3. Inicie a API:
    ````bash
    npm start


## Routes

### GET /

    [
        {
            "id": "client_id",
            "nome": "client_name",
            "email": "client_email",
            "senha": "client_password",
        },
        {
            ...
        }
    ]


### GET /:id

    {
        "id": "client_id",
        "nome": "client_name",
         "email": "client_email",
        "senha": "client_password",
    }


### POST /

    request: 
    {
        "body": {
            "nome": "nome que voce quiser",
            "senha": "senha que voce quiser"
        }
    }

    response: "Cliente adicionado a lista"

    
### POST /login

    request:
    {
        "body": {
            "nome": "nome do usuario",
            "senha": "senha do usuario"
        }
    }

    response: "Cliente logado com sucesso!"



### PUT /:id

    request:  {
        "nome": "coloque seu novo nome ou o mesmo se não quiser alterar isso",
         "email": "coloque seu novo email ou o mesmo se não quiser alterar isso",
        "senha": "coloque sua nova senha ou a mesma se não quiser alterar isso",
    }


    response: "Seus dados foram atualizados com sucesso!"


### DELETE /:id 

    response: "Cliente deletado!"
    

   
    

