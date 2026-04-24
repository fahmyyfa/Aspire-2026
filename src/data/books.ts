export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
}

export const books = [
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
];
