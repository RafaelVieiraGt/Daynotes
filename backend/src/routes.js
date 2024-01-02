const express = require('express')
const annotationsControler = require('./controllers/annotationsControler')
const prioritiesController = require('./controllers/priorityControler')
const contentControler = require('./controllers/contentControler')


const routes = express.Router();

routes.post('/annotations', annotationsControler.create)
routes.get('/annotations', annotationsControler.read)
routes.delete('/annotations/:id', annotationsControler.delete)


//priority routes

routes.get('/priorities', prioritiesController.read )
routes.post('/priorities/:id', prioritiesController.update)

//update notes

routes.post('/content/:id', contentControler.updateNote)
module.exports = routes