import React from "react";
import ReactDOM from "react-dom";
import Listings from "./Listings";
import TableHeader from "./TableHeader";
import DataExtraction from "./DataExtraction";



var customStyle = {
  marginTop: "1em",
  border:"6px solid white",
  width:"100%",

};

var object = {jobs:[
  {company:"iCIMS", position:"FullStack Developer", link:"https://icims.com"}, {company:"Windows", position:"Front Developer", link:"https://icims.com"}
]
};

//<Image style={styles.image} source={this.props.imageName} />
function Extract(){
var list = object.jobs;
var getImg;
for (var i in list) {
  if(list[i].company === "iCIMS"){
  getImg = "https://picsum.photos/200";
} else if (list[i].company === "Windows") {
  getImg = "../images/icimsLogo.png";
}

  var theList = React.createElement(Listings, {company: list[i].company, link:list[i].link, position:list[i].position, images:getImg});
  var child = document.getElementsByClassName("grid");
  console.log("here " + child.innerHTML);

return(
  theList
);
}

}


function Table(){
  return(
    <table className="grid" style={customStyle}>
    <TableHeader />
    <TableHeader name="Where" />
    <TableHeader name="What" />
    <TableHeader name="Apply" />

    <DataExtraction />

    </table>
  );
}

export default Table;
