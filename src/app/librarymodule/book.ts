export interface Book {
    title: string;
    author: string;
    genre: string;
    value: number;
    coverImage?: string | ArrayBuffer | null; 
}
