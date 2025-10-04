import { dbConnect } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method === 'GET') {
        try {

            const books = await Book.find({})
            res.status(200).json(books)

        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Failed to fetch book" })
        }
    }

    if(req.method === 'POST'){
        try {
            const book = await Book.create(req.body);
            res.status(201).json(book);
        } catch (err) {
            console.log(err)
            res.status(400).json({err:"Failed to create book"})
        }
    }
}