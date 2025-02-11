import React, { useRef, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [turno, setTurno] = useState(1);

  function retornaTurno() {

    const jugadorDeTurno = turno;

    if (turno === 1) {
      setTurno(2);
      return "<p> "
    } else {
      setTurno(1);
    }

  }

  return (
    <div className="container p-5">
      <h1 className="mb-5"> Its your turn </h1>
      <main className="row">
        <div
          className="btn col-4 border border-top-0 border-start-0 tablero simbolos"
          onClick={() => {
            retornaTurno();
          }}
        ></div>
        <div
          className="col-4 border border-top-0 border-start-0 border-end-0 tablero"
        >
          <p></p>
        </div>
        <div className="col-4 border border-top-0 border-end-0 tablero">
          <p></p>
        </div>
        <div className="col-4 border border-top-0 border-start-0 tablero">
          <p></p>
        </div>
        <div className="col-4 borde border-top-0 border-start-0 border-end-0 tablero">
          <p></p>
        </div>
        <div className="col-4 border border-top-0 border-end-0 tablero">
          <p></p>
        </div>
        <div className="col-4 border border-top-0 border-bottom-0 border-start-0 tablero">
          <p></p>
        </div>
        <div className="col-4 border border-bottom-0 border-start-0 border-end-0 tablero">
          <p></p>
        </div>
        <div className="col-4 border tablero border-bottom-0 border-top-0 border-end-0 ">
          <p></p>
        </div>
      </main>
    </div>
  );
};

export default Home;
