import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";
import Mascota from "../schemas/mascotas.js";
import mongoose from "mongoose";

class mascotasModel {
  async create(mascota) {
    // const colMascotas = dbClient.db.collection("mascotas");
    // return await colMascotas.insertOne(mascota);
    return await Mascota.create(mascota);
  }

  async update(id, mascota) {
    // const colMascotas = dbClient.db.collection("mascotas");
    // return await colMascotas.updateOne(
    //   { _id: new ObjectId(id) },
    //   { $set: mascota }
    // );
    return await Mascota.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      mascota,
      { new: true }
    );
  }

  async delete(id) {
    // const colMascotas = dbClient.db.collection("mascotas");
    // return await colMascotas.deleteOne({ _id: new ObjectId(id) });
    return await Mascota.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async getAll() {
    // const colMascotas = dbClient.db.collection("mascotas");
    // return await colMascotas.find({}).toArray();
    return await Mascota.find();
  }

  async getOne(id) {
    // const colMascotas = dbClient.db.collection("mascotas");
    // return await colMascotas.findOne({ _id: new ObjectId(id) });
    return await Mascota.findById(id);
  }
}

export default new mascotasModel();
