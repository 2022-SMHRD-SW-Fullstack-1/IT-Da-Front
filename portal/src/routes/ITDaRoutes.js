import React from 'react'

import T_Routes from './T_Routes'
import S_Routes from './S_Routes';
import M_Routes from './M_Routes';
import Navbar from '../components/Navbar';

const ITDaRoutes = () => {

   //Navbar용 메뉴 리스트
   const menuList = [{ title: "수업관리", subtitle: [{ title: "공지사항", url: "/C_announcement" }, { title: "강의 일정", url: "/" }, { title: "공유 자료실", url: "/" }, { title: "연장사용 신청서", url: "/" }] }, { title: "프로젝트", subtitle: [{ title: "프로젝트 관리", url: "/" }] }, { title: "학생관리", subtitle: [{ title: "출결 관리", url: "/" }, { title: "학생 정보", url: "/" }] }]

   return (

      <div className='T_mainInner'>
         <div className='T_mainInnerL'>
            <Navbar menuList={menuList} />
         </div>
         {(window.sessionStorage.getItem("role") === 's') && (
            <div className='T_mainInnerR'>
               <S_Routes />
            </div>
         )}
         {(window.sessionStorage.getItem("role") === 't') && (
            <div className='T_mainInnerR'>
               <T_Routes />
            </div>
         )}
         {(window.sessionStorage.getItem("role") === 'a') && (
            <div className='T_mainInnerR'>
               <M_Routes />
            </div>
         )}
      </div>


   )
}

export default ITDaRoutes