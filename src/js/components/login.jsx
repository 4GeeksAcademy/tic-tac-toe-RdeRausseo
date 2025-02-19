import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="container gy-3 p-5">
      <div className="row mb-5">
        <h3 className="text-center mb-2"> Escriban su apodo </h3>
      </div>
      <form className="row gy-3">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="nombre del jugador numero 1"
          />
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="nombre del jugador numero 2"
          />
        </div>
        <div className="offset-2 col-2">
          <FontAwesomeIcon icon={faX} className="fs-1" />
        </div>
        <div className="offset-5 col-2">
          <FontAwesomeIcon icon={faO} className="fs-1" />
        </div>
        <div className="col-3 bg-primary text-center rounded-2 mx-auto">
          <Link to="/home" className="btn btn-primary w-100">
            jugar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
