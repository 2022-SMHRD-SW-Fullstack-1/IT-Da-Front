import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import './css/App.css';
import './css/header.css'

import ITDaRoutes from './routes/ITDaRoutes';
import LoginRoutes from "./routes/LoginRoutes";
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='T_mainTopDiv'>
      <Header />
      {window.sessionStorage.getItem("loginId") == null ? (
        <LoginRoutes/>
      ) : (
            <ITDaRoutes />
      )}
      <Footer />
    </div>
  );
}

export default App;
