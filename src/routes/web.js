const express = require('express')
const router = express.Router()


router.get('/login', (req, res)=>{
   res.send(`pagina de login`)
})

router.get('/', (req, res)=>{
    const htmlResponse = `
    <html>
    <head>
        <title>Bem-vindo ao sistema ALSET de gestão empresarial</title>
    </head>
        <body>
            <h1>SEJA BEM-VINDO <br> SISTEMA ALSET DE GESTAO EMPRESARIAL <br> EM DESENVOLVIMENTO</h1>
        </body>
        <button onclick="window.location.href='/login'"> login </button>
    </html> 
    `;
    res.send(htmlResponse)
})

module.exports = router;