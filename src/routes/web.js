const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const htmlResponse = `
    <html>
    <head>
        <title>Bem-vindo ao sistema ALSET de gestão empresarial</title>
    </head>
        <body>
            <h1>SEJA BEM-VINDO AO SISTEMA ALSET DE GESTAO EMPRESARIAL</h1>
        </body>
        <button> FAZ NADA </button>
    </html> 
    `;
    res.send(htmlResponse)
})

module.exports = router;