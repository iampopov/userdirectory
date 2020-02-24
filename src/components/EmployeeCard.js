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
                
                <Row>
                <Col>
                        <Card>
                            <Row className="no-gutters">
                            <Col>
                                <img
                                top
                                src={props.image}
                                alt={props.first}
                                />
                            </Col>
                            <Col>
                                <CardBody>
                                <CardText>
                                    Some quick example text to build on the card title and
                                    make up the bulk of the card's content.
                                </CardText>
                                </CardBody>
                            </Col>
                            </Row>
                        </Card>
                        </Col>
                    {/* <Col className="col">
                    <img src={props.image} alt={props.first}/>
                    </Col>

                    <Col className="col">
                    <p>{props.first} {props.last}</p>
                    </Col>

                    <Col className="col">
                    <p>{props.phone}</p>
                    </Col>

                    <Col className="col">
                    <p>{props.email}</p>
                    </Col>

                    <Col className="col">
                    <p>{props.dob.date}</p>
                    </Col> */}
                    
                </Row>
                
        </EmployeeCardBar>
        </Row>
    )
};

export default EmployeeCard;