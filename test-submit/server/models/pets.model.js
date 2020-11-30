const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Got to have a name"],
        minlength: [3, "Pet name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Got to have a type"],
        minlength: [3, "Pet type has to be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Got to have a description"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;