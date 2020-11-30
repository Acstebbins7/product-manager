const Pet = require("../models/pets.model");

module.exports.findAllPets = (req,res) => {
    Pet.find()
            .then(allPets => res.json({pets: allPets}))
            .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id: req.params._id})
            .then(OnePet => res.json({pets: OnePet}))
            .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createPet = (req,res) => {
    Pet.create(req.body)
            .then(newPet => res.json({pets: newPet}))
            .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.deletePet = (req,res) => {
    Pet.remove({_id: req.params._id})
            .then(res.json({message: "The Pet Has been adopted"}))
            .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.updatePet = (req,res) => {
    Pet.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            type: req.body.type,
            descrition: req.body.description,
            skills1: req.body.skills1,
            skills2: req.body.skills2,
            skills3: req.body.skills3
        }
    }, {runValidators: true})    
            .then(allPets => res.json({pets: allPets}))
            .catch(err => res.json({message: "Something went wrong!", error: err}))
}