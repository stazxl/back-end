module.exports = app => {
    const formulaires = require("../controllers/formulaires.controller.js");
    var router = require("express").Router();
 
    // Créer un nouveau formulaire
    router.post("/", formulaires.create);
 
    // Récupérer tous les formulaires
    router.get("/", formulaires.findAll);
 
    // Récupérer un formulaire par ID
    router.get("/:id", formulaires.findOne);
 
    // Mettre à jour un formulaire par ID
    router.put("/:id", formulaires.update);
 
    // Supprimer un formulaire par ID
    router.delete("/:id", formulaires.delete);
 
    // Retourner le routeur
    app.use('/formulaires', router);
 };
