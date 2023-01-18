import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/MainComponent.css'

const Navbar = ({menuList}) => {

  const navigate = useNavigate()
  const onClickNav = (e) => {
    navigate(e.currentTarget.getAttribute('url'))
  }

  let navContent = menuList.map((item)=>(
  <div className='navContentBox' key={item.title}>
    <p className='navTitle'>{item.title}</p>
    {item.subtitle.map((item)=>(<p className='navSubtitle hoverHand' onClick={onClickNav} url={item.url} key={item.title}>{item.title}</p>))}
  </div>))

  return (
    <div className='navbarTopDiv'>
        {navContent}
    </div>
  )
}

export default Navbar