import React from "react";
import Heading from "./Heading";

function NavBar(){
  return(
    <div>
    <Heading />
        <ul id="nav">
            <li><a href="https://cs491project.s3.us-east-2.amazonaws.com/index.html">Find Jobs</a></li>
            <li><a href="http://navpagemockabout.s3-website.us-east-2.amazonaws.com/">About</a></li>
            <li><a href="http://navpagemocksignup.s3-website.us-east-2.amazonaws.com/">Sign Up</a></li>
            <li><a href="http://navpagemocklogin.s3-website.us-east-2.amazonaws.com/">Log in</a></li>
            <li><a href="http://navpagemockcontact.s3-website.us-east-2.amazonaws.com/">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar;
