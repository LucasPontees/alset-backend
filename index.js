// Nessa parte estamos declarando que usaremos o express
const express = require('express')

//vamos declarar o uso do express pelo meio da const app
const app = express()
//porta configurada para rodar na porta 3000
const porta = 3000
//configuramos uma rota principal para renderizar o texto
app.get('/', (req, res)=>{
    res.send('ola mundo')
})
// porta sendo ouvida na porta em questão.
app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})
