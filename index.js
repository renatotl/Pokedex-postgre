require("dotenv").config();// foi necessário instalar o npm i dotenv para o heroko pegando as configurações do DOTENV e chamando pro projeto
const { render } = require("ejs");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");//importando uma lib do proprio express chamada path  essencial link o frontend com o backend
const port = process.env.PORT || 3000; //esse code é pro heroko

app.use(express.urlencoded())//navegador envia as informações pelo json e essas informçãoes vem do body pega as informações que o cliente digitou no unput e envia pelo json 
app.set("view engine", "ejs"); //mortor engine da view é o ejs essencial
app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta 
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar


//app.use faz o nosso app usar os arquivos estáticos html e JS para front esses arquivos estáticos estão em path.join para juntar __dirname nome da pasta principal(,) nome da past a que é public
//A gora nosso servidor sabe onta está os arquivos estáticos



const pokedex =[//um arrey de objetos
  { //objetos são separados por vírgula
    id: 1,
    nome: "Pikachu",
    descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    tipo: "eletric" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    height: "0.4m",
      weight: "6.0 KG",
      category: "Mouse",
      abilities: "Statc"
  },
  { 
  id:2 ,
  nome: "Charmander",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "fire" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    height: "0.6m",
      weight: "8.5 KG",
      category: "lizard",
      abilities: "blaze"
  },
  { 
    id:3 ,
    nome: "Squirtle",
      descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      tipo: "water" ,
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      height: "0.5m",
      weight: "9.0 KG",
      category: "Tyni turtle",
      abilities: "Torrent"
    },
]
let message = "";

let pokemon = undefined;//se refere a linha de baixo

//rotas
app.get("/", (req, res) => {

  setTimeout(() => {
    message = "";
  }, 1000);
  
  res.render("index", {pokedex, pokemon, message});// É MUITO IMPORTANDO COLOCAR O POKEDEX ENTRE CHAVES COMO JSON SÓ ASSIM A NOSSA RESPOSTA É ENVIADA foi esse code que consegui imprimir na tela está renderizando index na pasta index
});
// o add é um nome aleatório 
app.post("/add", (req,res) =>{
   const pokemon = req.body;// o que vem da requisição .body
   message = `Pokemon, cadastrado com sucesso`;
   //todo pokemon add já recebe um id automático
   pokemon.id = pokedex.length + 1;
   //no code abaixo que pegamos as informações e inserimos na pokedex
   pokedex.push(pokemon);
   res.redirect("/#cards")// retorna pra rota "/" que logo em seguida renderiza o index na linha 44 e 45
});

//rota get vai pegar o id  primeiro ele vai pra detalhes 
app.get("/detalhes/:id", (req,res) => {
  const id = +req.params.id;//este id tem que está igual a linha 
//buscando pokemon por pokemon comprarando pokemon.id com o id recebido no parâetro
pokemon =pokedex.find(pokemon => pokemon.id === id);
res.redirect("/");


})

//pegar um pokemon por id. fazer uma atualização o put é pra pegar
app.post("/update/:id", (req, res) =>{//:id estou enviando um parâmetro na rota update
 const id = +req.params.id -1;
 // o sinal de + no req é igual quando usado prompt


    const newPokemon = req.body;
    newPokemon.id = id + 1;

    //achando a posição e está sendo add new pokemon
    pokedex[id] = newPokemon;

pokemon = undefined;

   // não dá pra mandar ele denovo pro redirect
   res.redirect("/#cards");
})

//criando a rota delete
app.get("/delete/:id", (req,res) => {
//pegando a posição do ID transformando ele em número e subtraindo 1
const id = +req.params.id -1;


delete pokedex[id]


res.redirect("/#cards");

})

app.get("/info/:id", (req,res) => {
const id = +req.params.id -1;// esses códigos foram exenciasi para info mostrar um pokemon
 
  pokemon = pokedex[id]
  
  res.render("index2", {pokedex, pokemon} )
 

})

app.get("/retornar/:id", (req,res) => {
  pokemon = undefined;
  res.redirect("/") // quando retornar ele volta pra pg inicial

})



app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));//ouvindo a porta 3000, rodando nessa porta




// É MUITO IMPORTANTE A ORDEM DAS LINHAS PRIORIDADE