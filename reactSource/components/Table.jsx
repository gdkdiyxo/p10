import React from "react";
import ReactDOM from "react-dom";
import Listings from "./Listings";
import TableHeader from "./TableHeader";

var customStyle = {
  marginTop: "1em",
  border:"6px solid white",
  width:"100%",

};

var object = {jobs:[
  {company:"iCIMS", position:"FullStack Developer", link:"https://icims.com"}, {company:"Windows", position:"Front Developer", link:"https://icims.com"}
]
};

function Extract(){
var list = object.jobs;
for (var i in list) {
  var theList = React.createElement(Listings, {company: list[i].company, link:list[i].link, position:list[i].position});
  var child = document.getElementsByClassName("grid");
  console.log("here " + child.innerHTML);
return(
  theList
);
}

}

  // ReactDOM.render(
  //   theList,
  //   document.getElementsByClassName("grid")
  // );

function Table(){
  return(
    <table className="grid" style={customStyle}>
    <TableHeader name="Where" />
    <TableHeader name="What" />
    <TableHeader name="Apply" />

    <Extract />




    </table>

  );
}

export default Table;
