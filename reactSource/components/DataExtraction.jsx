//jshint esversion: 6

import React from "react";
import Button from "./Button";


class DataExtraction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jobs: []
    };
  }

  componentDidMount(){
    fetch("http://www.diffbot.com/api/jobs?token=55d3a8a3f2a71e3672c8e10333ec43ba&url=https%3A%2F%2Fwww.indeed.com%2Fjobs%3Fq%3Dcomputer%2Bscience%2Binternship%26l%3DNew%2BYork%2BState")
    .then(results => results.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          jobs: result["jobs-internships"]
        });
        console.log(this.state.jobs);
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render(props){
    const { error, isLoaded, jobs} = this.state;
    if (error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
      return <h2>Loading...</h2>;
    } else {
      return(
        <tbody>
          {jobs.map(job => (
            <tr key={job.position} className="listing">
            <td>Picture></td>
            <td> {job.position} </td>
            <td> {job.type} </td>
            <td> <a href={job.link} target="_blank"> <Button name="Greatness"/></a> </td>

            </tr>
          ))}
        </tbody>
      );
    }
  }


}

export default DataExtraction;
