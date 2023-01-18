import React from 'react'
import { Routes, Route } from 'react-router-dom'

import M_main from '../pages/Manager/M_main'
import M_make_course from '../pages/Manager/M_make_course'
import M_edit_course from '../pages/Manager/M_edit_course'
import M_make_e_key from '../pages/Manager/M_make_e_key'
import M_edit_e from '../pages/Manager/M_edit_e'

const M_Routes = () => {
  return (
    <Routes>
      <Route path='/' element={<M_main />}></Route>
      <Route path='/make_course' element={<M_make_course />}></Route>
      <Route path='/edit_course' element={<M_edit_course />}></Route>
      <Route path='/make_e' element={<M_make_e_key />}></Route>
      <Route path='/edit_e' element={<M_edit_e />}></Route>
    </Routes>
  )
}

export default M_Routes