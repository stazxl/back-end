const db = require("../models");
const Items = db.items;
const Op = db.Sequilize.Op;


// creé et sauvegarder un nouveeau tuto 
exports.create = (req, res) => {
    //valider la requete 
    if (!req.body.title){
        res.status(400).send({
            message:"ne peut pas rester vide"
        });
        return;
    }
   
    // cree un tuto
    const items = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // sauvegarder le tuto dans la bdd
    Items.create(items)
    .then(data => {
        res.send(data);
    })
    .catch(err =>
        res.status(500).send({
            message:
            err.message  || "erreur pendant la création du tutoriel"
        })
    );
};

// recuperer tout les tutoriels de la bdd
exports.findAll = (req,res)=>{
    const title =req.query.title;
    var condition = title ? {title: {[Op.like]: `%${title}%` }} : null;

    Items.FindAll ({
        where:condition
    })
    .then(data=> {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "erreur de récupération des tutoriels"
        });
    });
};
    

    
// update tuto
exports.update = (req,res) => {
    const id = req.param.id;
    


    Tutorial.update(req.body,{
        where:{id:id}
    })    
    .them(num => {
        if(num == 1) {
            res.send({
                message:"tutoriel mis a jour"

            });
        } else {
            res.send({
             message: `ne peut pas mettre a jour le tutoriel id=${id}.`    
            });
        }
    })
    .catch(err=> {
        res.status(500).send({
            message:"erreur de mise a jour de tutoriel avec l'id-" +id
        });
    });
};


//suprimer un tuto avec une requet spécifique 
exports.delete = (req,res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where:{id:id}
    })
    .them(num=> {
        if(num==1) {
            res.send({
                mesage:"tutoriel suprimer"
            });
        } else {
            res.send({
                message: ` ne peut pas suprimé le tutoriel id=${id}.`
            });
        }
    })
    .catch(err => {
    res.status(500).send({
        message:"ne peut pas suprimer le tutoriel id=" +id
      }); 
    });
};