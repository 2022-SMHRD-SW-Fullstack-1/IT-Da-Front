import React from "react";
import { Routes, Route } from "react-router-dom";
import E_main from "../pages/Enterprise/E_main";
import E_main_detail from "../pages/Enterprise/E_main_detail";
import E_main_bookmark from "../pages/Enterprise/E_main_bookmark";
import E_make_company from '../pages/Enterprise/E_make_company'
import E_select_company from '../pages/Enterprise/E_select_company';

const E_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<E_main />}></Route>
      <Route path="/detail_user" element={<E_main_detail />} />
      <Route path="/detail_bookmark" element={<E_main_bookmark />} />
      <Route path='/make_company' element={<E_make_company />}></Route>
      <Route path='/select_one_company' element={<E_select_company />}></Route>
    </Routes>
  );
};
export default E_Routes;
