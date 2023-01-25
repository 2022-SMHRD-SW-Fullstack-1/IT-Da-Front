import React from 'react'
import { Routes, Route } from 'react-router-dom'

import S_main from '../pages/Course/Student/S_main.js'
import S_R_write from '../pages/Course/Student/S_R_write'
import S_C_main from '../pages/Course/Student/S_C_main'
import S_CL_main from '../pages/Course/Student/S_CL_main'

const S_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<S_main />}></Route>
         {/* <Route path='/resume_css' element={<Resume />}></Route> */}
         {/* <Route path='/resume/update' element={<S_R_main />}></Route> */}
         <Route path='/company/search' element={<S_C_main />}></Route>
         <Route path='/resume' element={<S_R_write />}></Route>
         <Route path='/cover_letter' element={<S_CL_main />}></Route>
      </Routes>
   )
}

export default S_Routes