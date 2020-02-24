import React from "react"; //, { Component }
import { 
    Row,
    Col,

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
                    {/* <Col id="image"> */}
                    <img src={props.image} alt={props.first}/>
                    {/* </Col>                 */}


                    <Col className="Name">
                    <Row>
                    <p>{props.first} {props.last}</p>
                    </Row>
                    </Col>

                    <Col>
                    <p>{props.phone}</p>
                    </Col>

                    <Col>
                    <p>{props.email}</p>
                    </Col>

                    <Col>
                    <p>{props.dob.date}</p>
                    </Col>
                    
                </Row>
                
        </EmployeeCardBar>
        </Row>
    )
};

export default EmployeeCard;