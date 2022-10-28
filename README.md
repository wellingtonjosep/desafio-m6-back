# Motor shop

>### `Tecnologias utilizadas:`
    "@prisma/client": "^4.5.0",
    "@types/cors": "^2.8.12",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "ts-node": "^10.9.1",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
    "prisma": "^4.4.0"
> ### Este projeto foi desenvolvido com [yarn](https://yarnpkg.com/getting-started/usage) então ao iniciar o projeto digite no terminal:
---

    Criando node-modules: yarn

    Rodando a API: yarn dev

---

# Exemplos básicos de requisição:

    Method POST
    Rota: /users

    Enviado: {
        "name": "user test",
        "email": "test@gmail.com",
        "cpf": "3425436543645",
        "phone": "81984848484",
        "birthDate": "2022-21-21",
        "description": "test",
        "typeUser": "advertiser",
        "password": "123",
        "cep": "52031051",
        "state": "pernambuco",
        "city": "recife",
        "road": "44",
        "numberHouse": 123,
        "complement": "test"
    }

    Recebido: {
        "id": "5a2c2bf0-12a8-4a90-9016-bef0d0455a5d",
        "name": "test",
        "email": "test@gmail.com",
        "cpf": "3425436543645",
        "phone": "81984848484",
        "birthDate": "2022-21-21",
        "description": "test",
        "typeUser": "advertiser",
        "created_at": "2022-10-26T17:05:11.165Z",
        "adresse": {
            "id": "d60eb6c5-6a9f-4195-8b20-b33e7d0c3ca0",
            "cep": "52031051",
            "state": "pernambuco",
            "city": "recife",
            "road": "44",
            "numberHouse": 123,
            "complement": "test",
            "userId": "5a2c2bf0-12a8-4a90-9016-bef0d0455a5d"
        }
    }

---

    Method POST
    Rota: /vehicles/:userId

    Enviado: {
        "title": "toyota etios",
        "typeVehicle": "car",
        "description": "antigo ao 2002",
        "year": 2002,
        "mileage": 200000,
        "price": 10000
    }

    Recebido: {
        "id": "ff5edecb-c936-4328-b6ee-ea673bdb9687",
        "title": "toyota etios",
        "typeVehicle": "car",
        "description": "antigo ao 2002",
        "year": 2002,
        "mileage": 200000,
        "price": 10000,
        "userId": "10802531-ae04-40d1-a29a-28aee0fafc3d",
        "created_at": "2022-10-28T15:15:14.206Z",
        "is_active": true
    }

> ### Lembrando que você não pode criar um usuario com os tipos diferentes de `buyer` ou `advertiser`

> ### Ao iniciar o projeto com yarn dev o link de acesso a API sera `localhost:4000`
