import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-right">
        <a className="header-link">Почта</a>
        <a className="header-link">Картинки</a>
        <button className="apps-btn" aria-label="apps">◻</button>
        <div className="avatar" title="Аккаунт"></div>
      </div>
    </header>
  );
}
