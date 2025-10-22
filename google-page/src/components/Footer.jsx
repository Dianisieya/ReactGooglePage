import React from "react";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-top">
        <span>Беларусь</span>
      </div>
      <div className="footer-bottom">
        <nav className="footer-links">
          <a>Всe о Google</a>
          <a>Реклама</a>
          <a>Дл бизнеса</a>
          <a>Как работает Googl Поиск</a>
        </nav>
        <nav className="footer-right">
          <a>Конфидениальность</a>
          <a>Условия</a>
          <a>Настройки</a>
        </nav>
      </div>
    </footer>
  );
}
