import React from 'react'
import { Routes, Route } from 'react-router-dom'

import S_main from '../pages/Course/Student/S_main.js'

const S_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<S_main />}></Route>
      </Routes>
   )
}

export default S_Routes