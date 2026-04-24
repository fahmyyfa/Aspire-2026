import Navbar from "../../../components/Navbar";
import { books } from "../../../src/data/books";

export default function BookDetail({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);
  if (!book) return <div className="container">Buku Tidak Ditemukan</div>;

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "80px 20px" }}>
        <div
          className="book-detail-wrapper"
          style={{ display: "flex", gap: "40px" }}
        >
          <div className="detail-info">
            <span className="badge badge-available">{book.category}</span>
            <h1
              className="hero-title"
              style={{ textAlign: "left", marginTop: "10px" }}
            >
              {book.title}
            </h1>
            <p
              className="hero-subtitle"
              style={{ margin: "0", textAlign: "left" }}
            >
              By {book.author}
            </p>
            <hr style={{ margin: "20px 0", opacity: "0.1" }} />
            <button className="btn btn-primary">Pinjam Sekarang</button>
          </div>
        </div>
      </main>
    </>
  );
}
