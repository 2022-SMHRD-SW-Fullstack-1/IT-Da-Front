import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/MainComponent.css'

const Navbar = () => {

  const navigate = useNavigate()
  const onClickNav = (e) => {
    navigate(e.currentTarget.getAttribute('url'))
  }

  const menuList = [{title: "수업관리", subtitle: [{title: "공지사항", url: "/C_announcement"}, {title: "강의 일정", url: "/"}, {title: "공유 자료실", url: "/"}, {title: "연장사용 신청서", url: "/"}]}, {title: "프로젝트", subtitle: [{title: "프로젝트 관리", url: "/"}]}, {title: "학생관리", subtitle: [{title: "출결 관리", url: "/"}, {title: "학생 정보", url: "/"}]}]

  let navContent = menuList.map((item)=>(
  <div className='navContentBox' key={item.title}>
    <p className='navTitle'>{item.title}</p>
    {item.subtitle.map((item)=>(<p className='navSubtitle' onClick={onClickNav} url={item.url} key={item.title}>{item.title}</p>))}
  </div>))

  return (
    <div className='navbarTopDiv'>
        {navContent}
    </div>
  )
}

export default Navbar