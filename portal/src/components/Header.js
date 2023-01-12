import React from 'react'

import '../css/header.css'
import logo from '../asset/img/logo_sbl.png'
import profileImg from '../asset/img/img_user.PNG'

const Header = () => {

    return (
        <div className='headerTopDiv'>
            <div className='headerInnerDiv'>
                <img className='headerLogo' src={logo} />

                <div className='headerRight'>
                    <p>강예진 연구원</p>
                    <img className='headerImgProfile' src={profileImg} />
                    <button className='headerBtn'>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Header