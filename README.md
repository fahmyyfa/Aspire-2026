# 📚 LibrAspire — Platform Perpustakaan Digital Modern

**LibrAspire** adalah aplikasi web perpustakaan digital yang dikembangkan untuk memudahkan pengguna menemukan dan meminjam buku secara interaktif. Proyek ini merupakan hasil migrasi dan pengembangan dari web statis (HTML/JS) ke ekosistem modern **React.js** dan **Next.js**.

---

## 🚀 3 Fitur Baru (Penugasan Modul 5)

Sesuai dengan peta jalan pengembangan aplikasi modern, proyek ini kini dilengkapi dengan:

1. **Arsitektur Komponen Modular (Props)**
   UI dipecah menjadi bagian-bagian kecil (Navbar, BookCard, Footer, dll) yang mandiri. Kami menggunakan **Props** untuk mengirim data buku secara spesifik ke setiap kartu tanpa menulis ulang kode.

2. **Interaksi Real-time (State Management)**
   Status ketersediaan buku ("Available" vs "Borrowed") kini bersifat dinamis menggunakan **State**. Tampilan web akan diperbarui secara otomatis seketika saat tombol diklik tanpa perlu memuat ulang halaman (re-render).

3. **Navigasi Halaman Dinamis (Routing)**
   Mengimplementasikan **File-Based Routing** untuk memisahkan halaman Katalog dan halaman Utama. Selain itu, terdapat **Dynamic Routes** (`/books/[id]`) yang memungkinkan setiap buku memiliki halaman detailnya sendiri secara otomatis.

---

## 🛠️ Teknologi yang Digunakan

* **Framework**: Next.js 14 (App Router)
* **Library**: React.js (Component-Based Architecture)
* **Language**: TypeScript (untuk keamanan kode)
* **Styling**: Global CSS (identik dengan desain LibrAspire sebelumnya)
* **Rendering**: Kombinasi Server Component (kecepatan) dan Client Component (interaksi).

---

## 📂 Struktur Proyek

```text
src/
├── app/              # Routing utama (Home, Catalog, Book Details)
├── components/       # Komponen modular (Navbar, BookCard, Footer)
└── data/             # Database lokal (Daftar buku dalam format .ts)
