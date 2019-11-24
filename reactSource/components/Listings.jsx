import React from "react";
import Button from "./Button";

function Listing(props){
  return(

    <tr className="listing">
      <td>{props.company}</td>
      <td>{props.position}</td>
      <td> <a href={props.link} target="_blank"> <Button /></a> </td>
    </tr>

);
}

export default Listing;
