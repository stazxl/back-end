module.exports = app =>{
    const simulations =require("../controllers/simulations.controller.js"); 
    var router = require("express").Router();
 
    //creé un nouveau tuto
    router.post("/",simulations.create);
 
    //recuperer rour les tutos
    router.get("/",simulations.findAll);
    
    //recuperer rour les tutos
    router.get("/:id",simulations.findOne);
 
    //mettre a jour un tuto par id 
    router.put("/:id",simulations.update);
 
    //suprimer un tuto par id
    router.delete("/:id",simulations.delete);
 
    //retourne le routeur
    app.use('/Simulations',router);
 };
 
 