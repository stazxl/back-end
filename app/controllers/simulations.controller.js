const db = require("../models");
const Formulaires = db.formulaires;
const TypesAbo = db.typesAbo;
const Op = db.Sequelize.Op;


// creé et sauvegarder un nouveeau tuto 
exports.create = (req, res) => {
    //valider la requete 
    if (!req.body){
        res.status(400).send({
            message:"ne peut pas rester vide"
        });
        return;
    }

    // sauvegarder le tuto dans la bdd
    Formulaires.create(req.body)
    .then(data => {
        res.status(200).send({
            message:"Création de l'objet réussi"
        });
    })
    .catch(err =>
        res.status(500).send({
            message:
            err.message  || "erreur pendant la création de l'objet"
        })
    );
};

// recuperer tout les tutoriels de la bdd
exports.findAll = (req,res)=>{
    Formulaires.findAndCountAll()
    .then(data=> {
        res.header('Access-Control-Expose-Headers','X-Total-Count')
        res.set('X-Total-Count', data.count)
        res.send(data.rows);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "erreur de récupération des Formulaires"
        });
    });
};

// recuperer un item
exports.findOne = (req,res)=>{

    Formulaires.findByPk(req.params.id,{
        include:{
            model:TypesAbo
        }
    })
    .then(data=> {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "erreur de récupération des Formulaires"
        });
    });
};
    
// update tuto
exports.update = (req,res) => {
    const id = req.body.id;

    Formulaires.update(req.body,{
        where:{id:id}
    })    
    .then(num => {
        if(num == 1) {
            res.status(200).send({
                message:"Formulaires mis a jour"

            });
        } else {
            res.send({
             message: `ne peut pas mettre a jour l'item  id=${id}.`    
            });
        }
    })
    .catch(err=> {
        res.status(500).send({
            message:"erreur de mise a jour de l'item avec l'id-" +id
        });
    });
};


//suprimer un tuto  
exports.delete = (req,res) => {
    const id = req.params.id;

    Formulaires.destroy({
        where:{id:id}
    })
    .them(num=> {
        if(num==1) {
            res.status(200).send({
                mesage:"objet suprimer"
            });
        } else {
            res.send({
                message: ` ne peut pas suprimé l'objet id=${id}.`
            });
        }
    })
    .catch(err => {
    res.status(500).send({
        message:"ne peut pas trouver l'objet id=" +id
      }); 
    });
};







