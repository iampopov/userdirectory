import React, {useState} from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmployeeView from "./components/EmployeeView";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCard from "./components/EmployeeCard";
import sampleData from "./data/sample.json";

function App() {
  const [employee, setEmployee] = useState({
    searchTerm: "",
    data: sampleData.results,
    selectedEmployee: null
    // image: sampleData.results.picture.thumbnail,
    // first: sampleData.results.name.first,
    // last: sampleData.results.name.last,
    // phone: sampleData.results.phone,
    // email: sampleData.results.email,
    // dob: sampleData.results.dob
    // image: "",
    // name: "",
    // phone: "",
    // email: "",
    // dob: ""
  })

  const { searchTerm, data, selectedEmployee } = employee;
  // const { searchTerm, image, first, last, phone, email, dob} = employee;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  }

  return (
    <div className="App">
      <NavBar />
      <EmployeeSearch
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        isSelected={data === selectedEmployee}
        selectedEmployee={() => setEmployee({ ...employee, selectedEmployee: employee })}
      />
      
      <Container>
        
        <EmployeeView />
          {data.map(record => (
            <EmployeeCard
            key={record.registered.date}
            id={record.registered.date}
            image = {record.picture.thumbnail}
            first = {record.name.first}
            last = {record.name.last}
            phone = {record.phone}
            email = {record.email}
            dob = {record.dob}
            />
          ))}
        

      </Container>
    </div>
  );
}

export default App;

{/* <Row>
{selectedEmployee ? (
  <EmployeeCard
  searchTerm={searchTerm}
  handleInputChange={handleInputChange}
  key={selectedEmployee.id.value}
  image = {selectedEmployee.picture.thumbnail}
  first = {selectedEmployee.name.first}
  last = {selectedEmployee.name.last}
  phone = {selectedEmployee.phone}
  email = {selectedEmployee.email}
  dob = {selectedEmployee.dob}
  />
) : (
  data.map(record => (
    <EmployeeCard 
    searchTerm={searchTerm}
    handleInputChange={handleInputChange}
    key={record.id.value}
    image = {record.picture.thumbnail}
    first = {record.name.first}
    last = {record.name.last}
    phone = {record.phone}
    email = {record.email}
    dob = {record.dob}
    
  />
  ))
)}
</Row>

 */}
