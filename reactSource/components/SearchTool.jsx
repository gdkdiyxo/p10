import React from "react";

function mySearch(){
  var input, filter, listing, txtValue, grid, td;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  grid = document.getElementsByClassName("grid");
  listing = document.getElementsByClassName("listing");

  for (var i=0; i< listing.length; i++) {
    td = listing[i].getElementsByTagName("td")[1];
    txtValue = td.textContent
    if (txtValue.toUpperCase().indexOf(filter)> -1) {
      listing[i].style.display = "";

    } else {
      listing[i].style.display = "none";
    }
  }

}

function SearchTool(){
  return(
    <div>
    <input id="input" type="text" placeholder="Search" onKeyUp={mySearch}/>
    </div>
  );
}




export default SearchTool;
