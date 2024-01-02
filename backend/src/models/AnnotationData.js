const mongoose = require('mongoose')

//como serão armazenados os dados no db
const annotationDataSchema = new mongoose.Schema({
    title: String,
    text: String,
    priority: Boolean
})

module.exports = mongoose.model("Annotations", annotationDataSchema) //exportando como modelo