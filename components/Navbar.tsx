import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">
            Libr<strong>Aspire</strong>
          </span>
        </Link>
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="nav-link">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/reading-list" className="nav-link">
                Reading List
              </Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </header>
  );
}
