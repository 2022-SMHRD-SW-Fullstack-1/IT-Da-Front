import React from 'react'
import { Routes, Route } from 'react-router-dom'

import M_main from '../pages/Manager/M_main'
import M_make_course from '../pages/Manager/course/M_make_course'
import M_edit_course from '../pages/Manager/course/M_edit_course'
import M_make_teacher from '../pages/Manager/course/M_make_teacher'
import M_make_e_key from '../pages/Manager/enterprise/M_make_e_key'
import M_edit_e from '../pages/Manager/enterprise/M_edit_e'
import M_make_company from '../pages/Manager/company/M_make_company'
import M_select_company from '../pages/Manager/company/M_select_company'
import M_announcement_list from '../pages/Manager/announcement/M_announcement_list'
import M_announcement_write from '../pages/Manager/announcement/M_announcement_write'



const M_Routes = () => {
  return (
    <Routes>
      <Route path='/' element={<M_main />}></Route>
      <Route path='/make_course' element={<M_make_course />}></Route>
      <Route path='/edit_course' element={<M_edit_course />}></Route>
      <Route path='/make_teacher' element={<M_make_teacher />}></Route>
      <Route path='/make_e' element={<M_make_e_key />}></Route>
      <Route path='/edit_e' element={<M_edit_e />}></Route>
      <Route path='/make_company' element={<M_make_company />}></Route>
      <Route path='/select_company' element={<M_select_company />}></Route>
      <Route path='/manager_announcement' element={<M_announcement_list />}></Route>
      <Route path='/manager_announcement_write' element={<M_announcement_write />}></Route>
    </Routes>
  )
}

export default M_Routes