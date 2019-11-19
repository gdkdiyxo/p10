import React from 'react';
import './App.css';

function MyButton(){
  return (<button>Click</button>);
  }

  function MyLogo(){
    return(<h1>Rutgers Internship Service</h1>);
  }

class Navbar extends React.Component{
  render() {
      return (
          <div>
            <ul id="nav">
              <li><a href="#">Find Jobs</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="https://navpagemocklogin.s3.us-east-2.amazonaws.com/mocklogin.html">Log in</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
      );
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyLogo />
      <MyButton />
    </div>
  );
}

export default App;
