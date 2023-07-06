module.exports = app => {
    const settings = require("../controllers/settings.controller");
    var router = require("express").Router();
 
    // Récupérer tous les formulaires
    router.get("/", settings.findAll); 
    
    // Récupérer tous les formulaires
    router.get("/:id", settings.findOne);

    // Mettre à jour un formulaire par ID
    router.put("/:id", settings.update);
 
    // Retourner le routeur
    app.use('/settings', router);
 };
