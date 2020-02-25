import React, {useState} from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCard from "./components/EmployeeCard";
import sampleData from "./data/sample.json";
import moment from 'moment';

function App() {
  const [employee, setEmployee] = useState({
    searchTerm: "",
    data: sampleData.results,
    searchResults: []
  })

  const { searchTerm, data, searchResults } = employee;

  const handleInputChange = e => {
    const searchResults = data.filter(employee => employee.email.toLowerCase().includes(e.target.value.toLowerCase()));
    setEmployee({ ...employee, searchResults, searchTerm: e.target.value});
  }

  const returnResults = () => {
    if (searchResults.length) {

      return searchResults.map(record => (
        <EmployeeCard
        key={record.registered.date}
        id={record.registered.date}
        image = {record.picture.large}
        first = {record.name.first}
        last = {record.name.last}
        phone={record.phone}
        email = {record.email}
        dob = {moment(record.dob.date, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").format("MMMM Do YYYY")} 
        />
      ))
    } else {

      return data.map(record => (
      <EmployeeCard
      key={record.registered.date}
      id={record.registered.date}
      image = {record.picture.large}
      first = {record.name.first}
      last = {record.name.last}
      phone={record.phone}
      email = {record.email}
      dob = {moment(record.dob.date, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").format("MMMM Do YYYY")} 
      />
    ))

    }
    
  }

  return (
    <div className="App">
      <NavBar />
      <EmployeeSearch
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
      />
      
      <Container>
        {returnResults()}
      </Container>
    </div>
  );
}

export default App;
