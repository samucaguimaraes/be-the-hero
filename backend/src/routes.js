/** Imports */
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/* Instanciando um objeto router */
const routes = express.Router();

/** Rotas */
routes.post('/session',SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

/** Deixar rotas disponíveis para index.js - exportando variável */
module.exports = routes;