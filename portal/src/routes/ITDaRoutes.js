import React from 'react'

import T_Routes from './T_Routes'
import S_Routes from './S_Routes';
import M_Routes from './M_Routes';
import Navbar from '../components/Navbar';

const ITDaRoutes = () => {

   //Navbar용 메뉴 리스트
   const menuList_t = [{ title: "수업관리", subtitle: [{ title: "공지사항", url: "/C_announcement" }, { title: "강의 일정", url: "/" }, { title: "공유 자료실", url: "/" }, { title: "연장사용 신청서", url: "/" }] }, { title: "프로젝트", subtitle: [{ title: "프로젝트 관리", url: "/" }] }, { title: "학생관리", subtitle: [{ title: "출결 관리", url: "/" }, { title: "학생 정보", url: "/" }] }]
   const menuList_s = [{ title: "수업관리", subtitle: [{ title: "공지사항", url: "/C_announcement" }, { title: "강의 일정", url: "/" }, { title: "공유 자료실", url: "/" }, { title: "연장사용 신청서", url: "/" }] }, { title: "프로젝트", subtitle: [{ title: "프로젝트 관리", url: "/" }] }, { title: "나의 정보", subtitle: [{ title: "이력서", url: "/resume" }, { title: "자기소개서", url: "/cover_letter" }, { title: "포트폴리오", url: "/" }] }]
   const menuList_m = [{ title: "과정관리", subtitle: [{ title: "과정생성", url: "/make_course" }, { title: "전체과정", url: "/edit_course" }] },
   { title: "정보공개", subtitle: [{ title: "기업용 키 생성", url: "/make_e" }, { title: "기업용 키 관리", url: "/edit_e" }] }]

   return (

      <div className='T_mainInner'>
         <div className='T_mainInnerL'>
            {(window.sessionStorage.getItem("role") === 's') && (<Navbar menuList={menuList_s} />)}
            {(window.sessionStorage.getItem("role") === 't') && (<Navbar menuList={menuList_t} />)}
            {(window.sessionStorage.getItem("role") === 'a') && (<Navbar menuList={menuList_m} />)}
         </div>
         <div className='T_mainInnerR'>
            {(window.sessionStorage.getItem("role") === 's') && (<S_Routes />)}
            {(window.sessionStorage.getItem("role") === 't') && (<T_Routes />)}
            {(window.sessionStorage.getItem("role") === 'a') && (<M_Routes />)}
         </div>
      </div>


   )
}

export default ITDaRoutes