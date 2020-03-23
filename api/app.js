const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/batons', function(req, res) {
    let batons = [
        {
            marca: "mac",
            tipo: "mate", 
            cor: "vermelho"
        },
        {
            marca: "KDV", 
            tipo: "metalico",
            cor: "azul"
        }
    ]

    res.send(JSON.stringify(batons))

})

app.listen(8000, function(){
    console.log('sevidor rodando na porta 8000')
})