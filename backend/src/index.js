const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
require('./config/mongoConfig') //importando conexão com o banco

app.use(cors());
app.use(express.json()) //permitindo o express identificar JSON
app.use(routes) //usando arquivo de rotas

app.listen(3333);

