import React from 'react'
import { Routes, Route } from 'react-router-dom'

import T_main from '../pages/Course/Teacher/T_main'
import M_main from '../pages/Manager/M_main'
import C_announcement from '../pages/Course/C_announcement';
import M_make_course from '../pages/Manager/M_make_course';
import M_edit_course from '../pages/Manager/M_edit_course';
import M_make_e_key from '../pages/Manager/M_make_e_key';

const ITDaRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<T_main />}></Route>
         <Route path='/announcement' element={<C_announcement />}></Route>
         <Route path='/m_main' element={<M_main/>}></Route>
         <Route path='/make_course' element={<M_make_course/>}></Route>
         <Route path='/edit_course' element={<M_edit_course/>}></Route>
         <Route path='/make_e_key' element={<M_make_e_key/>}></Route>
      </Routes>
   )
}

export default ITDaRoutes