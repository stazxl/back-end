const db = require("../models");
const Formulaire2 = db.formulaire2;
const Op = db.Sequelize.Op;

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

    const formulaire2 = {
        idObject: req.body.email + req.body.intitulePoste + req.body.ville,
        email: req.body.email,
        prenom: req.body.prenom,
        nom: req.body.nom,
        numeroTelephone: req.body.numeroTelephone,
        intitulePoste: req.body.intitulePoste,
        nomEntreprise: req.body.nomEntreprise,
        codePostal: req.body.codePostal,
        ville: req.body.ville,
        urlSiteWeb: req.body.urlSiteWeb,
        nombreAbonnes: req.body.nombreAbonnes,
        nouveauxInscrisMois: req.body.nouveauxInscrisMois,
        valeur$: req.body.valeur$,
        maladie: req.body.maladie,
        blessure: req.body.blessure,
        accident: req.body.accident,
        suspensionPro: req.body.suspensionPro,
        lignesImpayeesMois: req.body.lignesImpayeesMois,
        date: req.body.date,
        active: req.body.active
        };
  
    // Sauvegarder le formulaire dans la base de données
    Formulaire2.create(formulaire2)
        .then(data => {
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
    Formulaire2.findAndCountAll()
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
    Formulaire2.findByPk(req.params.id)
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

    Formulaire2.update(req.body, {
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

    Formulaire2.destroy({
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