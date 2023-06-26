// importe le paquet express node
const express = require('express')
const cors = require('cors')

// fait la création d'une application express
const app = express()

const db=require('./app/models/index.js');

// autoriser les requêtes CORS
var corsOptions = {
  origin: '*',
  methods: ['GET','POST','PUT','UPDATE','DELETE'],
}
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

//Creating/Synchronise database
db.sequelize.sync({alter:true})
.catch(error => {
  console.log(error)
})

//routes
require("./app/routes/items.route")(app);
require("./app/routes/formulaire2route")(app);
require("./app/routes/simulations.route")(app);

// demarrer serveur et écouter port 5000    
const PORT = process.env.port || 5000

app.listen(PORT, () => {
  console.log('serveur démarré sur le port: '+PORT)
})

