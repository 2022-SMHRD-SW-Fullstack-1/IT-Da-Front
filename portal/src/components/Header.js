import React from 'react'

import '../css/header.css'
import logo from '../asset/img/logo_sbl.png'
import profileImg from '../asset/img/img_user.PNG'

const Header = () => {

    const onClickLogout = () => {
        window.sessionStorage.removeItem("loginId")
        window.sessionStorage.removeItem("userName")
        window.sessionStorage.removeItem("role")
        window.location.replace("/")
    }

    const onClickLogo = () => {
        window.location.replace("/")
    }



    return (
        <div className='headerTopDiv'>
            <div className='headerInnerDiv'>
                <img onClick={onClickLogo} className='headerLogo hoberHand' src={logo} />
                {(window.sessionStorage.getItem("role") === 's') && (
                    <div className='headerRight'>
                    <p>{window.sessionStorage.getItem("userName")}</p>
                    <img className='headerImgProfile' src={profileImg} />
                    <button onClick={onClickLogout} className='headerBtn'>로그아웃</button>
                </div>
                )}
                {(window.sessionStorage.getItem("role") === 't') && (
                    <div className='headerRight'>
                    <p>{window.sessionStorage.getItem("userName")} 연구원</p>
                    <img className='headerImgProfile' src={profileImg} />
                    <button onClick={onClickLogout} className='headerBtn'>로그아웃</button>
                </div>
                )}
                {(window.sessionStorage.getItem("role") === 'a') && (
                    <div className='headerRight'>
                    <p>{window.sessionStorage.getItem("userName")}님</p>
                    <img className='headerImgProfile' src={profileImg} />
                    <button onClick={onClickLogout} className='headerBtn'>로그아웃</button>
                </div>
                )}
                {(window.sessionStorage.getItem("role") === 'e') && (
                    <div className='headerRight'>
                    <p>{window.sessionStorage.getItem("userName")}</p>
                    <img className='headerImgProfile' src={profileImg} />
                    <button onClick={onClickLogout} className='headerBtn'>로그아웃</button>
                </div>
                )}
                {(window.sessionStorage.getItem("role") === null) && (
                    <div className='headerRight'>
                    <a href='https://smhrd.or.kr/info/story/'>기관소개</a>
                    <a href='https://smhrd.or.kr/job/live/'>취업현황</a>
                </div>
                )}
            </div>
        </div>
    )
}

export default Header