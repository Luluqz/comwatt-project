# Comwatt - Epic Books
### _technical exercise_

## Featuring

- Symfony 6 & PHP 8.1
- Postgres 13
- Angular 13
- Docker

## Install with docker

Docker compose is required in order to start the project

```
cd docker
docker-compose up --build
```

Visit http://localhost:4200

## Install without docker
requirments:
```
php 8.1
postgres 13
node 16
npm
```
### symfony part:
```
 cd comwatt-api
```
edit database_url of your env file
```
  DATABASE_URL=postgresql://postgres:postgres@db:5432/comw
  DATABASE_URL=postgresql://[user]:[pwd]@[ip_postgre]:[port]/[nom_db]
```
with composer, run
```
composer install
composer doctrine:database:create
composer doctrine:migrations:migrate
composer doctrine:fixtures:load
symfony serve -d --no-tls
```
### angular part:
```
cd comwatt-ng
```
edit baseUrl at  src/app/service/product-http.service.ts with your backend url
```
private baseUrl = "http://[host]:[port]/api/products"
```
then run
```
npm i
ng serve
```
Visit http://localhost:4200



