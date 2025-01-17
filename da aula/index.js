const express = require('express')
var cors = require('cors')
// DESESTRUTURACAO
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const app = express()
const port = 10000

const sequelize = new Sequelize('postgresql://postgres.yhogvuqcegpuxhumgkyn:'+process.env.DATABASE_PASSWORD+'@aws-0-us-west-1.pooler.supabase.com:6543/postgres');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})
// /v1/user/chuchu METODOS HTTP

app.get('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    sequelize.query("SELECT * FROM users where id='" + request.params.id + "'", {
        type: QueryTypes.SELECT,
    }).then((result) => res.send(result));
})
app.post('/v1/user/:name', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.name', request.params.name)

    sequelize.query("INSERT INTO users (name, email) values ('"+request.params.name+"', '"+request.params.name+"')", {
        type: QueryTypes.INSERT,
    }).then((result) => res.status(201).send(result));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})