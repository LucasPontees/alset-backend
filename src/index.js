require('dotenv').config()
// Nessa parte estamos declarando que usaremos o express
const express = require('express')
const cors = require('cors')
//vamos declarar o uso do express pelo meio da const app
const server = express()
//porta configurada para rodar na porta 3000
const bodyParser = require('body-parser')
const routes = require('./routes/web')

server.use(bodyParser.json())
server.use(cors())
//configuramos uma rota principal para renderizar o texto
server.use('/', (routes))

// porta sendo ouvida na porta em questão.
server.listen(process.env.PORT, ()=>{
    let data = new Date()
    console.log(`Servidor rodando na porta ${process.env.PORT} em `+ data)

})
 