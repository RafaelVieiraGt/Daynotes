const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://Rafael:rafael2004@cluster0.csngin0.mongodb.net/annotations?retryWrites=true&w=majority'

//conectando banco de dados
const connection = mongoose.connect(dbConfig)

module.exports = connection;
 