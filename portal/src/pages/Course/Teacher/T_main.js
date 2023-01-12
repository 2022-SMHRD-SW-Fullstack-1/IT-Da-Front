import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Attendance from '../../../components/main/Attendance';
import Announcement from '../../../components/main/Announcement';
import Schedule from '../../../components/main/Schedule';

const T_main = () => {

  return (
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
  )
}

export default T_main