import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

import M_onCourse from './component/M_onCourse'
import M_announcement from './component/M_announcement'
import M_approve from './component/M_approve'

const M_main = () => {

    return (
        <Container>
            <Row>
                <Col lg={12} xl={5}>
                    <M_onCourse />
                    <M_announcement />
                </Col>
                <Col lg={12} xl={7}>
                    <M_approve />
                </Col>
            </Row>
        </Container>
    )
}

export default M_main