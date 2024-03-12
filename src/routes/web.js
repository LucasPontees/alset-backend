const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Pagina carregando com rotas aplicadas")
})

module.exports = router;