import React from "react";
//import ReactDOM from "react-dom";
import TableHeader from "./TableHeader";
import DataExtraction from "./DataExtraction";



var customStyle = {
  marginTop: "1em",
  border:"6px solid black",
  borderRadius: "40px",
  width:"90%",
  background: "radial-gradient(white, transparent)"
};

function Table(){
  return(
    <table className="grid" style={customStyle}>
    <thead>
    <tr>
    <TableHeader />
    <TableHeader name="Position" />
    <TableHeader name="About" />
    <TableHeader />
    </tr>
    </thead>

    <DataExtraction />

    </table>
  );
}

export default Table;
