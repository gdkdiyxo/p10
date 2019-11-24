import React from "react";

function CheckBox(){
    return(
        <div>
            <form id="FilterJobs"></form>
            <p><b>Filter by Job Title or Keywords</b></p>
            <input type="checkbox" name="skill1" value="Front"> Front End Dev
                <input type="checkbox" name="skill2" value="Back"> Back End Dev
                    <input type="checkbox" name="skill3" value="Full"> Full Stack
                        <input type="checkbox" name="skill4" value="ML"> Machine Learning
                            <input type="checkbox" name="skill5" value="DataS"> Data Science<br><br>
                                <input type="submit" value="Submit"></input></br></br></input></input></input></input></input>
        </div>
    )

}

export default CheckBox;







