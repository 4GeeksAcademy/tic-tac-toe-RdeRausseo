import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login.jsx";
import Home from "./Home.jsx";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
