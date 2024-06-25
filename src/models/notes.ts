import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, required: true, minLength: 3 },
    body: { type: String, required: true, minLength: 3 }
}, { timestamps: true })

const Note = mongoose.model('Note', noteSchema)

export = Note