const routes = require("express").Router()
const PokemonController = require("../controllers/PokemonController")



routes.get('/', PokemonController.getAll );
//nova rota
routes.get('/signup',PokemonController.signup);//ele vem de signup
routes.post('/add',PokemonController.add);
routes.get("/getById/:id/:method", PokemonController.getById);// rota em getById no ID no Method específico
//rota update
routes.post("/update/:id", PokemonController.update);
routes.get("/remove/:id", PokemonController.remove);



module.exports = routes;
