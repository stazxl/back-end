const db = require("../models");
const Items = db.items;
const Op = db.Sequelize.Op;


// creé et sauvegarder un nouveeau tuto 
exports.create = (req, res) => {
    console.log("data",req.body)
    //valider la requete 
    if (!req.body){
        res.status(400).send({
            message:"ne peut pas rester vide"
        });
        return;
    }

    // cree un Items
    const items = {
        idObject:req.body.name+req.body.couleur+req.body.type,
        color: req.body.color,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        type: req.body.type,
    };

    // sauvegarder le tuto dans la bdd
    Items.create(items)
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
    Items.findAndCountAll()
    .then(data=> {
        res.header('Access-Control-Expose-Headers','X-Total-Count')
        res.set('X-Total-Count', data.count)
        res.send(data.rows);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "erreur de récupération des Items"
        });
    });
};

// recuperer un item
exports.findOne = (req,res)=>{

    Items.findByPk(req.params.id)
    .then(data=> {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "erreur de récupération des Items"
        });
    });
};
    
// update tuto
exports.update = (req,res) => {
    const id = req.body.id;

    Items.update(req.body,{
        where:{id:id}
    })    
    .then(num => {
        if(num == 1) {
            res.status(200).send({
                message:"Items mis a jour"

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

    Items.destroy({
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











