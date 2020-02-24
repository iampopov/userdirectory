import React from "react"; //, { Component }
import { 
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
 } from "reactstrap";


import { EmployeeCardBar } from "../styles"
//import API from "../utils/API";

// const loadEmployee = () => {
    
// }
// class Employee extends Component {
//     componentDidMount() {
//         API.getEmployees()
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//     } 

// }

const EmployeeCard = props => {
    console.log(props);
    
    return (
        <Row>
        <EmployeeCardBar isSelected={props.isSelected} onChange={props.selectedEmployee}>
                    <Row id="ec">
                    <Col>
                    <Card>
                        <Row className="no-gutters">
                        <Col md="3">
                            <CardImg
                            top
                            width="100%"
                            src={props.image}
                            alt={props.first}
                            />
                        </Col>
                        <Col md="8">
                            <CardBody>
                            <CardTitle><h2>{props.first} {props.last}</h2></CardTitle>
                            {/* <CardSubtitle>
                                </CardSubtitle> */}
                            <CardText>
                                <p>Email is: {props.email}</p>
                                <p>
                                Phone number is {props.phone}
                                </p>
                            </CardText>
                            <CardText>
                                <p>
                                Date of birthday is {props.dob.date}
                                </p>
                            </CardText>
                            </CardBody>
                        </Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
               
                
        </EmployeeCardBar>
        </Row>
    )
};

export default EmployeeCard;