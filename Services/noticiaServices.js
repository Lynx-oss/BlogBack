const noticia = require("..models/noticiasModels");

const createNoticia = async (data) => {
    return await noticia.create(data);
}

const getAllNoticias = async () => {
    return await noticia.find({}).populate("autorID",);
}

const getNoticiaById = async (id) => {
    return await noticia.findById(id).populate("autorID",);
}

const updateNoticia = async (id, data) => {
    return await noticia.findByIdAndUpdate(id, data, { new: true });
}

const deleteNoticia = async (id) => {
    return await noticia.findByIdAndDelete(id);
}

module.exports = {
    createNoticia,
    getAllNoticias,
    getNoticiaById,
    updateNoticia,
    deleteNoticia
}