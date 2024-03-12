// Nessa parte estamos declarando que usaremos o express
const express = require('express')
const cors = require('cors')
//vamos declarar o uso do express pelo meio da const app
const server = express()
//porta configurada para rodar na porta 3000
const port = 3000

const routes = require('./routes/web')

server.use(cors())
//configuramos uma rota principal para renderizar o texto
server.get('/', (routes))

// porta sendo ouvida na porta em questão.
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
