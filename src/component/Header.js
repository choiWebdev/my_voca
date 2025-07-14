import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">Voca</Link>
      </h1>
      <nav className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/create_day" className="link">
          Day 추가
        </Link>
      </nav>
    </header>
  );
}
