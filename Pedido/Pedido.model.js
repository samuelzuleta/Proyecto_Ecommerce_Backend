const mongoose = require("mongoose");

const schemaUsuario = new mongoose.Schema({
    idVendedor: {type: String, required: true},
    idComprador: {type: String, required: true},
    descripcion: {type: String,required: true},
    libros: {type: [String],required: true},
    valortotal: {type: Number,required: true},
    estadopedido: {type: String, required: true, enum:['en progreso','completado','cancelado'],default:'en progreso'},
    estado: {type: Boolean, required: true, default: true}

  }, {
    versionKey: false,
    timestamps: true
});
  
const Model = mongoose.model('Pedido', schemaUsuario);

module.exports = Model;