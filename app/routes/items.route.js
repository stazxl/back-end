module.exports = app =>{
   const items =require("../controllers/items.controller.js"); 
   var router = require("express").Router();

   //creé un nouveau tuto
   router.post("/",items.create);

   //recuperer rour les tutos
   router.get("/",items.findAll);
   
   //recuperer rour les tutos
   router.get("/:id",items.findOne);

   //mettre a jour un tuto par id 
   router.put("/:id",items.update);

   //suprimer un tuto par id
   router.delete("/:id",items.delete);

   //retourne le routeur
   app.use('/Items',router);
};












