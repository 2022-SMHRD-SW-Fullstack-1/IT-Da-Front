import React from 'react'
import { Routes, Route } from 'react-router-dom'

import M_main from '../pages/Manager/M_main'

const M_Routes = () => {
  return (
    <Routes>
         <Route path='/' element={<M_main />}></Route>
      </Routes>
  )
}

export default M_Routes