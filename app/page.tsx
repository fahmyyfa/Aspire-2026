"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";
import FilterCategory from "../components/FilterCategory"; // Import komponen baru
import { books } from "../src/data/books";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mendapatkan daftar kategori unik secara otomatis dari data books.ts
  const categories = ["All", ...Array.from(new Set(books.map((b) => b.category)))];

  // Logika Filter Gabungan (Teks + Kategori)
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="container hero-content">
            <h1 className="hero-title">Find and Borrow Books Easily</h1>
            <p className="hero-subtitle">Jelajahi ribuan koleksi buku digital dalam genggaman Anda.</p>
            <div className="search-box">
              <input
                type="search"
                className="search-input"
                placeholder="Cari judul buku..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="categories" id="catalog" style={{ padding: "60px 0" }}>
          <div className="container">
            <h2 className="section-title">Explore Our Collection</h2>
            
            {/* Memanggil Komponen Filter */}
            <FilterCategory 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />

            <div className="books-grid">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard key={book.id} {...book} />
                ))
              ) : (
                <div style={{ textAlign: "center", gridColumn: "1/-1", padding: "40px" }}>
                   <p>Maaf, buku dengan kriteria tersebut tidak ditemukan.</p>
                   <button 
                    className="btn btn-outline" 
                    onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                    style={{ marginTop: "10px" }}
                   >
                     Reset Filter
                   </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <h2 className="section-title">LibrAspire in Numbers</h2>
            <div className="stats-grid">
              <StatCard number="12.500+" label="Total Buku" />
              <StatCard number="3.200+" label="Member Aktif" />
              <StatCard number="8.750+" label="Peminjaman / Bulan" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
