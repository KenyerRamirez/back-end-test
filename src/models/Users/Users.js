import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  contrasena: {
    type: String,
    required: true
  },
  puestoTrabajo: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    enum: ['Admin', 'Manager', 'Employee'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model('Usuarios', UsuarioSchema);

export default Usuario;

/*
Consulta de ejemplo:

Usuario.find().populate('rol').exec((err, usuarios) => {
  if (err) {
    console.error(err);
  } else {
    console.log(usuarios);
  }
});

*/