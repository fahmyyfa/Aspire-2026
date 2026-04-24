"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";
import { books } from "../src/data/books";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter((book: any) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <main>
        {/*komponen teks hero section*/}
        <section className="hero" id="home">
          <div className="container hero-content">
            <h1 className="hero-title">Find and Borrow Books Easily</h1>
            <div className="search-box">
              <input
                type="search"
                className="search-input"
                placeholder="Search books..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary search-btn">Cari</button>
            </div>
          </div>
        </section>

        {/*komponen katgori*/}
        <section className="categories" id="catalog">
          <div className="container">
            <h2 className="section-title">Browse Categories</h2>
            <ul className="categories-grid">
              <CategoryCard icon="💻" name="Technology" />
              <CategoryCard icon="🔬" name="Science" />
              <CategoryCard icon="📖" name="Novel" />
              <CategoryCard icon="💼" name="Business" />
              <CategoryCard icon="🏛️" name="History" />
              <CategoryCard icon="🎓" name="Education" />
            </ul>
          </div>
        </section>

        {/*komponen buku populer*/}
        <section className="popular-books">
          <div className="container">
            <h2 className="section-title">Popular Books</h2>
            <div className="books-grid">
              {filteredBooks.map((book: any) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>

        {/*komponen statik*/}
        <section className="statistics">
          <div className="container">
            <h2 className="section-title">LibrAspire in Numbers</h2>
            <div className="stats-grid">
              <StatCard number="12.500+" label="Total Buku" />
              <StatCard number="3.200+" label="Member Aktif" />
              <StatCard number="8.750+" label="Peminjaman / Bulan" />
            </div>
          </div>
        </section>

        {/*komponen kontak*/}
        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="contoh@email.com" required />
              </div>
              <div className="form-group">
                <label>Pesan</label>
                <textarea
                  rows={5}
                  placeholder="Tulis pesan Anda..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
