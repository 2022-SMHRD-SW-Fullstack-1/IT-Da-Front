import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import './css/App.css';
import './css/header.css'

import ITDaRoutes from './routes/ITDaRoutes';
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar';
import Login from './pages/Account/Login.js'

function App() {

  //Login 성공 여부 판단
  const [user, setUser] = useState(true);

  //Navbar용 메뉴 리스트
  const menuList = [{ title: "수업관리", subtitle: [{ title: "공지사항", url: "/C_announcement" }, { title: "강의 일정", url: "/" }, { title: "공유 자료실", url: "/" }, { title: "연장사용 신청서", url: "/" }] }, { title: "프로젝트", subtitle: [{ title: "프로젝트 관리", url: "/" }] }, { title: "학생관리", subtitle: [{ title: "출결 관리", url: "/" }, { title: "학생 정보", url: "/" }] }]

  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <div className='T_mainTopDiv'>
          <Header />
          <div className='T_mainInner'>
            <div className='T_mainInnerL'>
              <Navbar menuList={menuList} />
            </div>
            <div className='T_mainInnerR'>
              <ITDaRoutes />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
