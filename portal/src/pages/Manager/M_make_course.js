import React from 'react'
import Footer from '../../components/Footer.js'
import Header from '../../components/Header.js'
import "../../css/M_make_course.css"

const M_make_course = () => {
    return (
        <div>
            <Header />
            <div className='head_title'>
                <strong>과정생성</strong>
            </div>
            <div className='container'>


                <div className='container_inner'>

                    <div className='make_course_input'>
                        고유 key
                        <input type="text" />
                    </div>
                    <div className='make_course_input'>
                        과정명
                        <input type="text" />
                    </div>
                    <div className='make_course_input'>
                        과정시작날짜
                        <input type="text" />
                    </div>
                    <div className='make_course_input'>
                        과정정료날짜
                        <input type="text" />
                    </div>
                    <div className='make_course_input'>
                        담임명
                        <input type="text" />
                    </div>
                    <div className='make_course_input'>
                        총원
                        <input type="text" />
                    </div>

                </div>



            </div>
            <Footer />
        </div>
    )
}

export default M_make_course