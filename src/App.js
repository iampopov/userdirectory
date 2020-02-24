import React, {useState} from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmployeeView from "./components/EmployeeView";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCard from "./components/EmployeeCard";
import sampleData from "./data/sample.json";
import moment from 'moment';

// I’d create a new value in state called searchResults. Anytime a user searched, I’d take the main list of employees from state and filter it to create the searchResults, then I’d store the updated searchResults in state.

// Then in your JSX you could check to see if searchResults has a length (and thus results), and if it does, show it instead of the main list of employees.

// To make that work, though, you’d need to set searchResults equal to [] when a user was not searching.

// (That way it would default to showing the original employee list instead.

function App() {
  const [employee, setEmployee] = useState({
    searchTerm: "",
    data: sampleData.results,
    selectedEmployee: []
  })

  const { searchTerm, data, selectedEmployee } = employee;

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
       // isSelected={data === selectedEmployee} // i dont think i need this
//        selectedEmployee={() => setEmployee({ ...employee, selectedEmployee: employee })}
        // selectedEmployee={() => setEmployee({ ...employee, selectedEmployee: data.filter(el => el.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) })}

      />
      
      <Container>
        
        {/* <EmployeeView /> */}
         { searchTerm.length
         ?
         (<p>{searchTerm}</p>)
         :
         (
          data.map(record => (
            <EmployeeCard
            key={record.registered.date}
            id={record.registered.date}
            image = {record.picture.large}
            first = {record.name.first}
            last = {record.name.last}
            //phone = {(record.phone).replace(/\D/g,'').substring(0,10).match(/^(\d{3})(\d{3})(\d{4})$/)}
            phone={record.phone}
            email = {record.email}
            dob = {moment(record.dob.date, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").format("MMMM Do YYYY")} 
            //dob = {record.dob.date}
            />
          ))
         )}
          
        

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
