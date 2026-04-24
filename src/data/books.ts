export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Technology",
  },
  {
    id: "2",
    title: "The Subtle Art",
    author: "Mark Manson",
    category: "Novel",
  },
  {
    id: "3",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Technology",
  },
  {
    id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
  },
  {
    id: "5",
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
  },
];
