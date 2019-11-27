//jshint esversion: 6

import React from 'react';
import './App.css';
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import SearchTool from "./components/SearchTool";
import Table from "./components/Table";
import DataExtraction from "./components/DataExtraction";
import Button from "./components/Button";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading />
      <SearchTool />
      <Table />


    </div>
  );
}



export default App;


//<a href="../public/index2.html"> <Button name="Page 2"/></a>
//<a href="../public/index3.html"> <Button name="Page 3"/></a>
