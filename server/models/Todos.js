const mongoose = require('mongoose')
// Définition du schéma pour le modèle Todo

const TodoShema = new mongoose.Schema({
    activity: String,
    time: String
})
// Création du modèle Todo
const TodoModel = mongoose.model("Todos", TodoShema)
// Export du modèle
module.exports = TodoModel