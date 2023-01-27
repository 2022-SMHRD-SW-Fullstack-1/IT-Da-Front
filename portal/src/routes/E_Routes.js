import React from 'react'
import { Routes, Route } from 'react-router-dom'

import E_main from "../pages/Enterprise/E_main";
import E_main_detail from "../pages/Enterprise/E_main_detail";

const E_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<E_main />}></Route>
         <Route path="/detail_user" element={<E_main_detail />} />
      </Routes>
   )
}

export default E_Routes