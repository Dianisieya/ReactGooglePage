import React, { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");

  return (
    <div className="search-wrap">
      <div className="search-pill">
        <span className="icon search-icon" aria-hidden>🔍</span>
        <input
          className="search-input"
          placeholder="Введите запрос"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="right-icons">
          <button className="icon-btn" title="Голос">🎙️</button>
          <button className="icon-btn" title="Режим ИИ">✨</button>
        </div>
      </div>
    </div>
  );
}
