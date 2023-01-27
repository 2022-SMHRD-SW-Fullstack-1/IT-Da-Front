import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import E_Register from "../pages/Account/E_Register";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/e_register" element={<E_Register />} />
    </Routes>
  );
};

export default LoginRoutes;
