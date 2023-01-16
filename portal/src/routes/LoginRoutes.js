import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Account/Login'
import Register from '../pages/Account/Register'

const LoginRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
   )
}

export default LoginRoutes