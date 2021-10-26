# Tiva App Test
A challenge requested from the startup as a test for a software engineering position.

## Instalation
Install dependencies
```bash
yarn
```
Create the Docker database
```bash
docker run --name tiva_app -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Start the Docker database
```bash
docker start tiva_app
```

Run Migrations
```bash
yarn sequelize db:migrate
```

You can use Postbird or Dbeaver as UI for the tables
You need to use localhost as Host
Use port 5432
Username: postgres
password: docker

Start your server
```bash
yarn dev
```

# Insomnia tests

Use Insomnia as a tester. Just click the button below and it will create the correct environment

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=teste-tiva-app&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcvbordalo%2Ftiva-teste-2%2Fmain%2Finsomniaexport.json)

