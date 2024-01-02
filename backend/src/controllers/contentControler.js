const Annotations = require('../models/AnnotationData')

module.exports = {

    async updateNote(request, response){

        const { id } = request.params;
        const { text } = request.body;

        const note = await Annotations.findOne({ _id: id })

        if(text){
            note.text = text

            await note.save()
        }

        return response.json(note)
    }
}