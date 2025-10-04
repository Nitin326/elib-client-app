import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
})

const BookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: AuthorSchema,
    coverImage: { type: String, required: true },
    file: { type: String, required: true },
    genre: { type: String, required: false },
},
    { timestamps: true }
)


export default mongoose.models.Book || mongoose.model('Book', BookSchema)