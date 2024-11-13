import { useState } from "react";

function Education(){
    const [schoolName, setSchoolName] = useState("");
    const [year, setYear] = useState("");
    const [degree, setDegree] = useState("");
    const [isEditingEducation, setIsEditingEducation] = useState(false);

    const handleSubmitEducation = (e) =>{
        e.preventDefault();
        setIsEditingEducation(false);
    }

    const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value)
    }

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const handleDegreeChange = (event) => {
        setDegree(event.target.value)
    }

    return(
        <div>
                <div className="resume">
                    <div className='education'>
                        <h2>Education</h2>
                        <hr />
                        <div>{schoolName}</div>
                        <div>{year}</div>
                        <div>{degree}</div>
                    </div>
                </div>
            {isEditingEducation ?(
                    <form className='educationForm' onSubmit={handleSubmitEducation}>
                    <label htmlFor="schoolName">School/University Name</label>
                    <input type="text" id='schoolName' placeholder='Harvard' value={schoolName} onChange={handleSchoolNameChange}/>
                    <label htmlFor="endYear">Expected Graduation year</label>
                    <input type="number" id='endYear' placeholder='2025' value={year} onChange={handleYearChange}/>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id='degree' placeholder='Evology' value={degree} onChange={handleDegreeChange}/>
                    <button onClick={()=>setIsEditingEducation(true)}>Edit</button>
                    <input type="submit" value="submit" />
                </form>):
                (
                    <div>
                        <button onClick={()=> setIsEditingEducation(true)}>Edit</button>
                    </div>
                )}

        </div>
    );
}


export {Education}