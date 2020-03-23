const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const lipsticks = [
    {   
        id: 10,
        brand: "mac",
        type: "mate", 
        color: "vermelho"
    },
    {
        id: 20,
        brand: "KDV",
        type: "metalico", 
        color: "roxo"
    }
]

app.use(bodyParser.json())

app.get('/lipsticks', function(req, res) {

    res.send(JSON.stringify(lipsticks))
})

app.get('/lipsticks/:id', function(req, res) {
    const id = parseInt(req.params.id)
    const index =  lipsticks.findIndex(lipstick => lipstick.id === id)
    const lipstick = lipsticks[index]

    res.send(lipstick)
})

app.post('/lipsticks', function (req, res) {
    const newLipstick = req.body 

    lipsticks.push(newLipstick)

    res.send(JSON.stringify(newLipstick))
})

app.delete('/lipsticks/:id', function (req, res) {
    const lipstickId = parseInt(req.params.id)
    const index =  lipsticks.findIndex(lipstick => lipstick.id === lipstickId)
    const lipstickOld =  lipsticks[index]

    lipsticks.splice(index, 1)

    res.send(lipstickOld)
})

app.put('/lipsticks/:id', function (req, res) {
    const lipstickId = parseInt(req.params.id)
    const lipstickPayload = req.body
    const lipIndex = lipsticks.findIndex(lipstick => lipstick.id === lipstickId)
    lipsticks.splice(lipIndex, 1, lipstickPayload)
   
    res.send(lipsticks)
}) 

app.listen(8000, function(){
    console.log('sevidor rodando na porta 8000')
})