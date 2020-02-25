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
    selectedEmployee: [],
    searchResults: []
  })

  const { searchTerm, data, selectedEmployee, searchResults } = employee;

  const handleInputChange = e => {
    // const { name, value } = e.target;
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
        //phone = {(record.phone).replace(/\D/g,'').substring(0,10).match(/^(\d{3})(\d{3})(\d{4})$/)}
        phone={record.phone}
        email = {record.email}
        dob = {moment(record.dob.date, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").format("MMMM Do YYYY")} 
        //dob = {record.dob.date}
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
      //phone = {(record.phone).replace(/\D/g,'').substring(0,10).match(/^(\d{3})(\d{3})(\d{4})$/)}
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
