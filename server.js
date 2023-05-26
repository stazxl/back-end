// importe le paquet express node
const express = require('express')


// fait la création d'une application express
const app = express()

const db=require('./app/models/index.js');

//Creating/Synchronise database
db.sequelize.sync({alter:true})
.catch(error => {
    console.log(error)
})

// demarrer serveur et écouter port 6000    
const PORT = process.env.port||6000
app.listen(PORT, () => {
    console.log('serveur démarré :http://localhost:'+PORT)
})