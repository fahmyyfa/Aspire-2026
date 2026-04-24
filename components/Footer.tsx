export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text">
            Libr<strong>Aspire</strong>
          </span>
          <p className="footer-tagline">
            Perpustakaan digital untuk generasi masa depan.
          </p>
        </div>
        <div className="footer-links">
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter / X</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Our Office</h4>
          <address>Jl. Raya Tlogomas No. 246, Malang</address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 LibrAspire. All rights reserved.</p>
      </div>
    </footer>
  );
}
