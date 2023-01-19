import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import E_Main from "../pages/Enterprise/E_main";
import E_main_detail from "../pages/Enterprise/E_main_detail";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/e_main" element={<E_Main />} />
      <Route path="/detail_user" element={<E_main_detail />} />
    </Routes>
  );
};

export default LoginRoutes;
