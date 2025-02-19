import React, { useRef, useState } from "react";
import Cuadrado from "./cuadrado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {
  const [cuadrado, setCuadrado] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(true);

  const dibujar = (index) => {
    if (cuadrado[index] || quienGana(cuadrado)) return;
    cuadrado[index] = turno ? "X" : "O";
    setTurno(!turno);
    setCuadrado(cuadrado);
  };

  function quienGana(cuadrado) {
    const combinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of combinacionesGanadoras) {
      const [a, b, c] = combo;
      if (
        cuadrado[a] &&
        cuadrado[a] === cuadrado[b] &&
        cuadrado[a] === cuadrado[c]
      ) {
        return cuadrado[a];
      }
    }
    return null;
  }

  function mostrarJugadorOGanador() {
    const ganador = quienGana(cuadrado);
    let jugadorOGanador;

    if (ganador) {
      jugadorOGanador = `The winner is:  ${ganador} `;
    } else {
      jugadorOGanador = "Next Player: ";
    }
    return jugadorOGanador;
  }

  return (
    <div className="container p-5">
      <h1> {mostrarJugadorOGanador()}</h1>
      <main className="row p-2">
        <div
          className={
            turno
              ? "col-5 p-3 text-center mb-4 btn btn-dark"
              : "col-5 p-3 text-center mb-4 "
          }
        >
          <FontAwesomeIcon icon={faX} className="fs-1" />
        </div>
        <div
          className={
            turno
              ? "col-5 p-3 text-center mb-4 "
              : "col-5 p-3 text-center mb-4 btn btn-dark"
          }
        >
          <FontAwesomeIcon icon={faO} className="fs-1" />
        </div>
        <div className="col-12">
          <Cuadrado simbolo={cuadrado[0]} onClick={() => dibujar(0)} />
          <Cuadrado simbolo={cuadrado[1]} onClick={() => dibujar(1)} />
          <Cuadrado simbolo={cuadrado[2]} onClick={() => dibujar(2)} />
        </div>

        <div className="col-12">
          <Cuadrado simbolo={cuadrado[3]} onClick={() => dibujar(3)} />
          <Cuadrado simbolo={cuadrado[4]} onClick={() => dibujar(4)} />
          <Cuadrado simbolo={cuadrado[5]} onClick={() => dibujar(5)} />
        </div>

        <div className="col-12">
          <Cuadrado simbolo={cuadrado[6]} onClick={() => dibujar(6)} />
          <Cuadrado simbolo={cuadrado[7]} onClick={() => dibujar(7)} />
          <Cuadrado simbolo={cuadrado[8]} onClick={() => dibujar(8)} />
        </div>
      </main>
    </div>
  );
};

export default Home;
