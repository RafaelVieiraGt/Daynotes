
const Annotations = require('../models/AnnotationData')
//o model ja foi exportado como model do mongoose, dessa forma a conexão ja está criada.
//criando e ja exportando todas as funções que serão chamadas durante a requisição
module.exports = {

    async read(request, response) {
       const annotationList = await Annotations.find();
       
       return response.json(annotationList)

    },

    async create(request, response) {

        const {title, text, priority} = request.body;

        if(!title || !text){
            return response.status(400).json({error: "Por favor, não deixe campos em branco!"})
        }

        const AnnotationToRegister = await Annotations.create({
            title,
            text,
            priority
        })

        return response.json(AnnotationToRegister)

    },

    async delete(request, response){

        const { id } = request.params

        const annotationDeleted = await Annotations.findByIdAndDelete(id)

        if(annotationDeleted){
            return response.status(200).json(annotationDeleted)
        }
        
        return response.status(401).json({error: "Anotação não encontrada!"})

    }


}