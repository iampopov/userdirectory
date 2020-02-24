import React from "react";
import { Col, Row } from "reactstrap"

import { EmployeeBar } from "../styles"

const EmployeeView = props => {
    return (
        <EmployeeBar>
        <Row>
        <Col>
        <h5>IMAGE</h5>
        </Col>
        <Col>
        <h5>NAME</h5>
        </Col>
        <Col>
        <h5>PHONE</h5>
        </Col>
        <Col>
        <h5>EMAIL</h5>
        </Col>
        <Col>
        <h5>Date Of Birthday</h5>
        </Col>
        </Row>
        </EmployeeBar>
    )
};

export default EmployeeView;