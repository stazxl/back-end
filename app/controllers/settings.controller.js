const db = require("../models");
const Settings = db.settings;

// recuperer tout les tutoriels de la bdd
exports.findAll = (req,res)=>{
    Settings.findAndCountAll()
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

// creé et sauvegarder un nouveeau tuto 
exports.findOne = (req, res) => {
    //valider la requete 
    if (!req.body){
        res.status(400).send({
            message:"ne peut pas rester vide"
        });
        return;
    }

    // sauvegarder le tuto dans la bdd
    Settings.findByPk(req.params.id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err =>
        res.status(500).send({
            message:
            err.message  || "erreur de récupération de l'objet"
        })
    );
};

// creé et sauvegarder un nouveeau tuto 
exports.update = (req, res) => {
    //valider la requete 
    if (!req.body){
        res.status(400).send({
            message:"ne peut pas rester vide"
        });
        return;
    }

    // sauvegarder le tuto dans la bdd
    Settings.update(req.body)
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
