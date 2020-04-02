/**  Importando o mini framework express */
const express   =  require('express') ;
const cors = require('cors');
const routes = require('./routes');

/** Instanciando o express */
const app = express();

/* Converter o json do body */
app.use(cors()); 
app.use(express.json());
app.use(routes);

app.listen(3333);

