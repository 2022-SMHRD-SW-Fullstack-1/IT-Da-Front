import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../css/header.css'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Attendance from '../../../components/main/Attendance';
import Announcement from '../../../components/main/Announcement';
import Schedule from '../../../components/main/Schedule';
import Navbar from '../../../components/Navbar';

const T_main = () => {

  const menuList = [{title: "수업관리", subtitle: [{title: "공지사항", url: "/C_announcement"}, {title: "강의 일정", url: "/"}, {title: "공유 자료실", url: "/"}, {title: "연장사용 신청서", url: "/"}]}, {title: "프로젝트", subtitle: [{title: "프로젝트 관리", url: "/"}]}, {title: "학생관리", subtitle: [{title: "출결 관리", url: "/"}, {title: "학생 정보", url: "/"}]}]

  return (
    <div className='T_mainTopDiv'>
      <Header />
      <div className='T_mainInner'>
        <div className='T_mainInnerL'>
          <Navbar menuList={menuList}/>
        </div>
        <div className='T_mainInnerR'>
          <Container>
            <Row>
              <Col xs={12} lg={5}>
                <Attendance />
                <Announcement />
              </Col>
              <Col xs={12} lg={7}>
                <Schedule />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default T_main