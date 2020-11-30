const PetController = require("../controllers/pets.controller");

module.exports = app => {
    // get all
    app.get("/api/pets", PetController.findAllPets);
    // get one
    app.get("/api/pets/:_id", PetController.findOnePet);
    // create one
    app.post("/api/pets/new", PetController.createPet);
    // delete one
    app.delete("/api/pets/delete/:_id", PetController.deletePet);
    // update one
    app.put("/api/pets/update/:_id", PetController.updatePet);
    
}