const db = require("../models");
const Formulaires = db.formulaires;
const Abonnements = db.abonnements;

// Créer et sauvegarder un nouveau formulaire
exports.create = (req, res) => {
    console.log("data", req.body);
    // Valider la requête
    if (!req.body) {
        res.status(400).send({
            message: "Ne peut pas rester vide"
        });
        return;
    }
// Créer un nouveau formulaire

    const formulaires = {
        ...req.body,
        idFormulaire: req.body.email + req.body.intitulePoste + req.body.ville,
    };

    // let abo={}

    // for(let i =0; i<req.body.abonnement.length; i++){
    //     abo[i]={
    //         ...req.body.abonnement[i],
    //         idFormulaire: req.body.email + req.body.intitulePoste + req.body.ville,
    //     }
    // }
    // console.log('abo',abo)

    // Sauvegarde type d'abo dans bdd
    // const abonnement =Abonnements.bulkCreate(abo)
  
    // // Sauvegarder le formulaire dans la base de données
    // const formulaire = Formulaires.create(formulaires)

    // Promise.all([formulaire,abonnement])
    
    Formulaires.create(formulaires,{
        include:Abonnements
    })
    .then(values => {
        console.log('values',values)
        res.status(200).send({
            message: "Création du formulaire réussie"
        });
    })
    .catch(err =>
        res.status(500).send({
            message: err.message || "Erreur pendant la création du formulaire"
        })
    );
};

// Récupérer tous les formulaires de la base de données
exports.findAll = (req, res) => {
    Formulaires.findAndCountAll()
        .then(data => {
            res.header('Access-Control-Expose-Headers', 'X-Total-Count');
            res.set('X-Total-Count', data.count);
            res.send(data.rows);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des formulaires"
            });
        });
};

// Récupérer un formulaire par son ID
exports.findOne = (req, res) => {

    Formulaires.findByPk(req.params.id,{
        include:[
            {model:Abonnements}
        ]
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur de récupération du formulaire"
        });
    });
};

// Mettre à jour un formulaire
exports.update = (req, res) => {
    const id = req.body.id;

    Formulaires.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Formulaire mis à jour"
                });
            } else {
                res.send({
                    message: `Ne peut pas mettre à jour le formulaire avec l'ID ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur de mise à jour du formulaire avec l'ID " + id
            });
        });
};

// Supprimer un formulaire
exports.delete = (req, res) => {
    const id = req.params.id;

    Formulaires.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Formulaire supprimé"
            });
        } else {
            res.send({
                message: `Ne peut pas supprimer le formulaire avec l'ID ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ne peut pas trouver le formulaire avec l'ID " + id
        });
    });
}