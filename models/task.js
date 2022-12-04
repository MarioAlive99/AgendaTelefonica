const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombre: String,
    telefono: String,
    estado: {
        type: Boolean,
        default: false
    }});
module.exports = mongoose.model('task', TaskSchema);