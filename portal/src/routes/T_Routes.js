import React from 'react'
import { Routes, Route } from 'react-router-dom'

import T_main from '../pages/Course/Teacher/T_main'
import C_announcement from '../pages/Course/C_announcement';
import C_announcement_detail from '../pages/Course/C_announcement_detail';
import C_announcement_write from '../pages/Course/Teacher/C_announcement_write'

const T_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<T_main />}></Route>
         <Route path='/C_announcement' element={<C_announcement />}></Route>
         <Route path='/C_announcement/detail' element={<C_announcement_detail />}></Route>
         <Route path='/C_announcement/detail/write' element={<C_announcement_write />}></Route>
      </Routes>
   )
}

export default T_Routes