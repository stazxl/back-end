// importe le paquet express node
const express = require('express')
const cors = require('cors')

// fait la création d'une application express
const app = express()

const db=require('./app/models/index.js');

//Creating/Synchronise database
db.sequelize.sync({alter:true})
.catch(error => {
    console.log(error)
})

require("./app/routes/items.route")(app);

// demarrer serveur et écouter port 6000    
const PORT = process.env.port||5000
app.listen(PORT, () => {
    console.log('serveur démarré :http://localhost:'+PORT)
})
var corsOptions = {
  origin: '*',
}
 app.listen(500, function () {
  console.log('CORS-enabled web server listening on port 500')
})
app.use(cors(corsOptions))
   
