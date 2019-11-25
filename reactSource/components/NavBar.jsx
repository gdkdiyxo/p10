import React from "react";

function NavBar(){
  return(
    <div>
        <ul id="nav">
            <li><a href="https://cs491project.s3.us-east-2.amazonaws.com/index.html">Find Jobs</a></li>
            <li><a href="http://navpagemockabout.s3-website.us-east-2.amazonaws.com/">About</a></li>
            <li><a href="http://navpagemocksignup.s3-website.us-east-2.amazonaws.com/">Sign Up</a></li>
            <li><a href="https://navpagemocklogin.s3.us-east-2.amazonaws.com/mocklogin.html">Log in</a></li>
            <li><a href="https://navpagemockcontact.s3.us-east-2.amazonaws.com/mockcontact.html">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar;
