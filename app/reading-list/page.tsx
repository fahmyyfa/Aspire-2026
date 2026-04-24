"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookCard from "../../components/BookCard";
import { books } from "../../src/data/books";

export default function ReadingList() {
  const [savedBooks, setSavedBooks] = useState<any[]>([]);

  const loadSavedBooks = () => {
    const savedIds = JSON.parse(localStorage.getItem("readingList") || "[]");
    const filtered = books.filter((book) => savedIds.includes(book.id));
    setSavedBooks(filtered);
  };

  useEffect(() => {
    loadSavedBooks();
    // Listen ke event kustom jika ada perubahan dari komponen lain
    window.addEventListener("storageUpdate", loadSavedBooks);
    return () => window.removeEventListener("storageUpdate", loadSavedBooks);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <h1 className="section-title">My Reading List ⭐</h1>
        {savedBooks.length > 0 ? (
          <div className="books-grid">
            {savedBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <p>Belum ada buku di daftar bacaanmu.</p>
            <a href="/" className="btn btn-primary" style={{ marginTop: "20px", display: "inline-block" }}>
              Cari Buku Sekarang
            </a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
