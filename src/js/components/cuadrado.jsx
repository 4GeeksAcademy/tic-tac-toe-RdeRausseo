import React from "react";

export default function Cuadrado({ simbolo, onClick }) {
  return (
    <button className="square btn btn-outline-dark" onClick={onClick}>
      {simbolo}
    </button>
  );
}
