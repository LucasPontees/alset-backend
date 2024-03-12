// Nessa parte estamos declarando que usaremos o express
const express = require('express')

//vamos declarar o uso do express pelo meio da const app
const app = express()
//porta configurada para rodar na porta 3000
const port = 3000
//configuramos uma rota principal para renderizar o texto
app.get('/', (req, res)=>{
    res.send('ola mundo, estamos configurados no azure devops')
})

// porta sendo ouvida na porta em questão.
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
