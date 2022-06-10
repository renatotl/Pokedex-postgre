# projeto-Pokedex



Criado a pasta SRC
-Controllers
--PokemonControllers.js
-database
--bd.js
-models
--pokemon.js
-routes
--routes.js




Banco de dados pokedex criada no Postgre com a tabela pokemon 


create table pokemon(
    id integer not null generated always as identity,
    nome character(50) not null,
	descricao character(1000) not null,
	tipo character(50) not null,
	imagem character(1000)  not null,
	primary key (id)
)
-----
insert into pokemon (nome, descricao, tipo, imagem)
values(
      'Tyranitar',
      'Its body can’t be harmed by any sort of attack, so it is very eager to make challenges against enemies.',
      'Rock Darck',
	  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png'
)
---
insert into pokemon (nome, descricao, tipo, imagem)
values(
      'Ekans',
      'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
      'Poison',
	  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'
)

criando o arquivo .env na rais do projeto
criando .env-exemple 

configuração do .ENV :
DB_BASE = pokemon
DB_USER = postgres
DB_PASS = admin
DB_HOST = localhost


agora no banco de dados o bd.js instalar a biblioteca sequelize 
ela se conecta com o banco de dados e faz todas as operações do CRUDE pra gente  

npm install sequelize pg pg-hstore

olhando no package.json 
    "pg": "^8.7.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.20.1"

    agora em models- Pokemon.js

    agora em controllers - PokemonController

    config routes

    o index usa as ROUTES que usa o CONTROLLERS que usa o MODELS que usa connect em bd.js


    foi criado a pasta components em views components eles guardam pequenas partes do código que se repete