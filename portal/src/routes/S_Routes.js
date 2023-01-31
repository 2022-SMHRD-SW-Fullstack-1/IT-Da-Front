import React from 'react'
import { Routes, Route } from 'react-router-dom'

import S_main from '../pages/Course/Student/S_main.js'
import Resume from '../components/Resume'
import S_R_write from '../pages/Course/Student/S_R_write'
import S_C_main from '../pages/Course/Student/S_C_main'
import S_P_main from '../pages/Course/Student/S_P_main'
import S_CL_main from '../pages/Course/Student/S_CL_main'
import ResumeFrame from '../pages/Course/Student/Resume/ResumeFrame.js'
import CoverLetterFrame from '../pages/Course/Student/Resume/CoverLetterFrame.js'
import C_extend from '../pages/Course/Teacher/extend/C_extend.js'
import C_extend_detail from '../pages/Course/Teacher/extend/C_extend_detail.js'
import C_announcement from '../pages/Course/C_announcement.js'
import C_announcement_detail from '../pages/Course/C_announcement_detail';
import C_archive from '../pages/Course/C_archive'

const S_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<S_main />}></Route>
         <Route path='/resume_css' element={<Resume />}></Route>
         <Route path='/resume/frame' element={<ResumeFrame />}></Route>
         <Route path='/cover_letter/frame' element={<CoverLetterFrame />}></Route>
         {/* <Route path='/resume/update' element={<S_R_main />}></Route> */}
         <Route path='/company/search' element={<S_C_main />}></Route>
         <Route path='/resume' element={<S_R_write />}></Route>
         <Route path='/cover_letter' element={<S_CL_main />}></Route>
         <Route path='/portfolio' element={<S_P_main />}></Route>
         <Route path='/extend' element={<C_extend />}></Route>
         <Route path='/extend/detail' element={<C_extend_detail />}></Route>
         <Route path='/announcement' element={<C_announcement />}></Route>
         <Route path='/announcement/detail' element={<C_announcement_detail />}/>
         <Route path='/archive' element={<C_archive />}></Route>
      </Routes>
   )
}

export default S_Routes