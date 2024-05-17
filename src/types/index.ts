export type Book = {
    _id: string;
    title: string;
    genere: string;
    file: string;
    coverImage: string;
    description: string;
    author: Author;
}


export type Author = {
    name: string;
}

