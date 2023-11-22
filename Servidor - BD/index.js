//Importando pacotes do NPM

let express = require('express');
let cors = require('cors');

//BD
let bd = require('./bd');
let porta = 3000;
//Iniciar o servidor
let app = express();

//Configurar o servidor
app.use(cors(0));
app.use(express.json());

// Rotas
app.get('/', (req, res) =>{
    return res.status(200).json({msg: 'Rota inicial'});
})

//Pegar todos os filmes 
app.get('/filmes', async (req, res) => {
    //SQL: SELECT id, titulo FROM filmes
    let filmes = await bd.query('SELECT id, titulo FROM filmes')

    return res.status(200).json(filmes);
})

app.get('/filmes/:id', async (req, res)=>{
    let id = req.params.id;

    let filme = await bd.query('SELECT * FROM filmes WHERE id = ? AND year = ?' , [id, year]);

    return res.status(200).json(filme);
})

//Filtrar por nota
// /filmes/maior/:nota

app.get('/filmes/maior/:nota', async (req, res) =>{
  let nota = req.params.nota;

//   let filmes = await bd.query()
})

app.listen(porta, ()=> {
    console.log(`Rodando em http://localhost:${porta}`)
})
