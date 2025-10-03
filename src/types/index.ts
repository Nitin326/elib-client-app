export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    genre:string;
    file: string;
    author: Author;
};

export type Author = {
    id:string;
    name: string;
};