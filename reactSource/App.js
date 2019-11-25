//jshint esversion: 6

import React from 'react';
import './App.css';
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import SearchTool from "./components/SearchTool";
import Table from "./components/Table";
import CheckBox from "./components/CheckBox";


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
