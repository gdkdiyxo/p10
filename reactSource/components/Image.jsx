//jshint esversion: 6
import React from "react";


var imgStyle = {
  width:"60px",
  heigth:"60px",
  borderRadius:"30px"
};

function Image(props){
  const a = Math.floor((Math.random()*6)+ 1);
  var image;
  if (a === 1) {
    image="https://picsum.photos/id/1/200";
  } else if (a === 2) {
    image="https://picsum.photos/id/180/200";
  }else if (a === 3) {
    image="https://picsum.photos/id/366/200";
  }else if (a === 4) {
    image="https://picsum.photos/id/403/200";
  }else if (a === 5) {
    image="https://picsum.photos/id/532/200";
  }else {
    image="https://picsum.photos/id/20/200";
  }


  return(
    <img src={image} alt="Logo" style={imgStyle} />
  );
}

export default Image;
