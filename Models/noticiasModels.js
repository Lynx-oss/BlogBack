const mongoose = require("mongoose");

const noticiaSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    contenido: {type: String, required: true},
    fecha : {type: Date, required: true},
    descripcion: {type: String, required: true},
    autorID: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Author"},
})

{
    timestamps: true
}

module.exports = mongoose.module("Noticia", blogSchema);