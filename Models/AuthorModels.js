const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    biografia: {type: String, required: true},
    fechaNacimiento: {type: Date, required: true}, 
    pais: {type: String, required: true},
})
{
    timestamps: true
}
module.exports = mongoose.model("Author", authorSchema);


