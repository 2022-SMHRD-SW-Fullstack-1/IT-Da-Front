import React from 'react'
import { Routes, Route } from 'react-router-dom'

import T_main from '../pages/Course/Teacher/T_main'
import C_announcement from '../pages/Course/C_announcement';
import C_announcement_detail from '../pages/Course/C_announcement_detail';
import C_announcement_write from '../pages/Course/Teacher/C_announcement_write'
import Resume from '../components/Resume'
import C_archive from '../pages/Course/C_archive';
import C_archive_write from '../pages/Course/Teacher/C_archive_write';
import C_archive_detail from '../pages/Course/C_archive_detail';

const T_Routes = () => {
   return (
      <Routes>
         <Route path='/' element={<T_main />}/>
         <Route path='/announcement' element={<C_announcement />}/>
         <Route path='/announcement/detail' element={<C_announcement_detail />}/>
         <Route path='/announcement/write' element={<C_announcement_write />}/>
         <Route path='/resume' element={<Resume/>}/>
         <Route path='/archive' element={<C_archive/>}/>
         <Route path='/archive/detail' element={<C_archive_detail/>}/>
         <Route path='/archive/write' element={<C_archive_write/>}/>
      </Routes>
   )
}

export default T_Routes