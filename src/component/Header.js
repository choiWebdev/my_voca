import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <a>Voca</a>
      </h1>
      <nav className="menu">
        <a href="#x" className="link">
          단어 추가
        </a>
        <a href="#x" className="link">
          Day 추가
        </a>
      </nav>
    </header>
  )
}