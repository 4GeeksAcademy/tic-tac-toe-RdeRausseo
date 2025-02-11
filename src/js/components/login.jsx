import React from "react";

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
        <div className="offset-5 col-2">
          <button className="btn btn-primary">jugar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
