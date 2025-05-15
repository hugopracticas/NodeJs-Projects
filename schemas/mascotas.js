import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      enum: ["perro", "gato", "conejo", "pajaro", "pescado"],
    },
    raza: {
      type: String,
    },
    edad: {
      type: Number,
    },
    descripcion: {
      type: String,
    },
    adoptado: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("mascotas", mascotaSchema);
