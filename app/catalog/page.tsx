import Navbar from "../../components/Navbar";
import BookCard from "../../components/BookCard";

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: "40px" }}>
        <h1 className="section-title">Full Catalog</h1>
        <div className="books-grid">
          {/*menampilkan lebih banyak buku menggunakan komponen yang sama*/}
          <BookCard id="1" title="Atomic Habits" author="James Clear" />
          <BookCard id="2" title="The Subtle Art" author="Mark Manson" />
          <BookCard id="3" title="Clean Code" author="Robert C. Martin" />
          <BookCard id="4" title="React Modern" author="ASpire Team" />
        </div>
      </main>
    </>
  );
}
