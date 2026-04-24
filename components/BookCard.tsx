"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BookCard({ id, title, author }: any) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  // buat ngeCek apakah buku sudah ada di daftar simpan saat komponen dimuat
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("readingList") || "[]");
    setIsSaved(savedBooks.includes(id));
  }, [id]);

  const toggleSave = () => {
    const savedBooks = JSON.parse(localStorage.getItem("readingList") || "[]");
    let updatedList;
    
    if (isSaved) {
      updatedList = savedBooks.filter((bookId: string) => bookId !== id);
    } else {
      updatedList = [...savedBooks, id];
    }
    
    localStorage.setItem("readingList", JSON.stringify(updatedList));
    setIsSaved(!isSaved);
    // Trigger event kustom agar halaman lain tahu ada perubahan data
    window.dispatchEvent(new Event("storageUpdate"));
  };

  return (
    <article className="book-card">
      <figure className="book-cover">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=440&h=640&fit=crop"
          alt={title}
        />
        {/* Tombol Simpan/Bookmark */}
        <button 
          onClick={toggleSave}
          className="save-btn"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: isSaved ? "#ffd700" : "rgba(255,255,255,0.8)",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          {isSaved ? "⭐" : "☆"}
        </button>
      </figure>
      <div className="book-info">
        <Link href={`/books/${id}`}>
          <h3 className="book-title" style={{ cursor: "pointer" }}>{title}</h3>
        </Link>
        <p className="book-author">{author}</p>
        <button
          onClick={() => setIsAvailable(!isAvailable)}
          className={isAvailable ? "badge badge-available" : "badge badge-borrowed"}
        >
          {isAvailable ? "Available" : "Borrowed"}
        </button>
      </div>
    </article>
  );
}
