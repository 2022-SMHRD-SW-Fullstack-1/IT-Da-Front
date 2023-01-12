import React from 'react'
import { Routes, Route } from 'react-router-dom'

import T_main from '../pages/Course/Teacher/T_main'
import M_main from '../pages/Manager/M_main'
import C_announcement from '../pages/Course/C_announcement';

const ITDaRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<T_main />}></Route>
         <Route path='/announcement' element={<C_announcement />}></Route>
      </Routes>
   )
}

export default ITDaRoutes