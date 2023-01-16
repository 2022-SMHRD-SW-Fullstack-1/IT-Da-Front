import React from 'react'
import { Routes, Route } from 'react-router-dom'

import S_main from '../pages/Course/Student/S_main.js'
import S_R_main from '../pages/Course/Student/S_R_main'

const S_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<S_main />}></Route>
         <Route path='/resume' element={<S_R_main />}></Route>
      </Routes>
   )
}

export default S_Routes