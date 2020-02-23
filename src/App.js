import React from 'react';
import { Container } from "reactstrap"; //, Row, Col


import NavBar from "./components/NavBar";
import EmployeeView from "./components/EmployeeView";

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <EmployeeView />

      </Container>
    </div>
  );
}

export default App;
