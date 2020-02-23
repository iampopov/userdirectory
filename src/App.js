import React from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmployeeView from "./components/EmployeeView";
import EmployeeSearch from "./components/EmployeeSearch";

function App() {
  return (
    <div className="App">
      <NavBar />
      <EmployeeSearch />
      
      <Container>
        <EmployeeView />

      </Container>
    </div>
  );
}

export default App;
