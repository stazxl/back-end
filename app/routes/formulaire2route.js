module.exports = app => {
    const formulaire2 = require("../controllers/formulaire2.controller.js");
    var router = require("express").Router();
 
    // Créer un nouveau formulaire
    router.post("/", formulaire2.create);
 
    // Récupérer tous les formulaires
    router.get("/", formulaire2.findAll);
 
    // Récupérer un formulaire par ID
    router.get("/:id", formulaire2.findOne);
 
    // Mettre à jour un formulaire par ID
    router.put("/:id", formulaire2.update);
 
    // Supprimer un formulaire par ID
    router.delete("/:id", formulaire2.delete);
 
    // Retourner le routeur
    app.use('/formulaires', router);
 };