import { dbConnect } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;
    await dbConnect();

    if (req.method === "GET") {
        try {
            const book = await Book.findById(id);
            if (!book) return res.status(404).json({ err: "Book Not Found" });
            res.status(200).json(book)
        } catch (err) {
            res.status(500).json({ err: "Failed to fetch Book" })
        }
    }

}