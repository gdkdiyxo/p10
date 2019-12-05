import React from "react";

function Heading(){
  return(
    <div className="headDiv">
    <h1 id="logo">INTERNSHIP SEARCH ENGINE</h1>
    <h2 className="colab">In Collaboration with iCIMS</h2>
    <img className="ilogo" src={require('../images/ilogo.png')} alt="iCIMS logo"/>


    </div>
  );
}

export default Heading;
