const Pokemon = require("../models/Pokemon");// trazndo pokemon pro nosso controller



// app.get('/', (req,res) =>{
//     res.render('index')
// })

const orderById = { order: [["id", "ASC"]] };//definido o orderById
let message = "";
let type = "";
//alinha de cima está representada na linha de baixo

const getAll = async (req,res) => {

try{
const pokedex = await Pokemon.findAll()
   res.render('index',{pokedex, pokemonPut: null, pokemonDel: null})
}catch (err) {
res.status(500).send({err: err.message})//erro do servidor
// o messa vem o objeto err pro causa do express
}


}

//direcionar para pg signup
const signup = (req,res) => {
try{
res.render("signup");//só quero que ele tente renderizar minha página signup

}catch (err) {
   res.status(500).send({err: err.message})//erro do servidor
}

};

//criando o controle da rota add
const add = async (req,res) => {
   try {
      const pokemon =req.body;
      if (!pokemon) {
         return res.redirect('/signup')// redireciona para routes na linha 8
      }
      await Pokemon.create(pokemon);
      res.redirect('/')
   } catch (err) {
   res.status(500).send({err: err.message})//erro do servidor

   }
}
//pegando o ID do pokemon que iremos mudar
const getById = async (req, res) => {//função de call back
   try {//o prarams vai atrás do parâmetro
     const method = req.params.method;
     const pokedex = await Pokemon.findAll(orderById);//pokemons no modal
     const pokemon = await Pokemon.findByPk(req.params.id);//procura esse pokemon na lista de pokemons pelo ID 
     //este metod tem que esté igual ao method de rotes
 
     if (method == "put") {
       res.render("index", {
         pokedex,
         pokemonPut: pokemon,// se o method for PUT no pokemonPut aparecer´´a o pokemon escolhido
         pokemonDel: null,// já aqui é nulo
         message,
         type,
         pokemonSearch: []
       });
     } else {
       res.render("index", {// se o method não for PUT entrará este aqui
         pokedex,
         pokemonPut: null,
         pokemonDel: pokemon,
         message,
         type,
         pokemonSearch: []
       });
     }
   } catch (err) {
     res.status(500).send({ err: err.message });
   }
 };


 const update = async (req, res) => {
   try {
     const pokemon = req.body;
     await Pokemon.update(pokemon, { where: { id: req.params.id } });// opdate() é uma função o primeiro lalor ou parâmetro é o valor que eu quero que atualize de acordo com o segundo 
     message = "Pokemon atualizado com sucesso!";// mensagem que aparecerá e já foi definida lá me cima 
     type = "success";
     res.redirect("/");
   } catch (err) {
     res.status(500).send({ err: err.message });
   }
 };

 const remove = async (req, res) => {
  try {
    await Pokemon.destroy({ where: { id: req.params.id } });// destrua o pokemon atravez do ID dele
    message = "Pokemon removido com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};


module.exports = {
   getAll,
   signup,
   add,
   getById,
   update,
   remove,
};