import React from "react";
import Button from "./Button";

export default function Buttons() {
  return (
    <div className="buttons">
      <Button text="Поиск в Google" />
      <Button text="Мне повезёт!" className="btn-secondary" />
    </div>
  );
}
