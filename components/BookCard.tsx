"use client";
import { useState } from "react";
import Link from "next/link";

export default function BookCard({ id, title, author }: any) {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <article className="book-card">
      <figure className="book-cover">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=440&h=640&fit=crop"
          alt={title}
        />
      </figure>
      <div className="book-info">
        <Link href={`/books/${id}`}>
          <h3 className="book-title" style={{ cursor: "pointer" }}>
            {title}
          </h3>
        </Link>
        <p className="book-author">{author}</p>
        <button
          onClick={() => setIsAvailable(!isAvailable)}
          className={
            isAvailable ? "badge badge-available" : "badge badge-borrowed"
          }
        >
          {isAvailable ? "Available" : "Borrowed"}
        </button>
      </div>
    </article>
  );
}
