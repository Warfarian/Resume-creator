import React , {useState} from 'react'
import './styles/App.css'

// import GenInfo from './components/GenInfo';

export default function InputForm(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isEditingGenInfo, setIsEditingGenInfo] = useState(false);

    const handleSubmitGenInfo = (e) =>{
        e.preventDefault();
        setIsEditingGenInfo(false);
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const [companyName, setCompanyName] = useState("");
    const [role, setRole] = useState("");
    const [description, setDesc] = useState("");
    const [isEditingWorkExp, setIsEditingWorkExp] = useState(false);

    const handleSubmitWorkExp = (e) =>{
        e.preventDefault();
        setIsEditingWorkExp(false);
    }

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value)
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value)
    }

    const handleDescChange = (event) => {
        setDesc(event.target.value)
    }

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
            <div className='allForms'>

                {isEditingGenInfo ? (
                    <form className='genInfoForm' onSubmit={handleSubmitGenInfo}>
                    <label htmlFor="studentName">Name</label>
                    <input type="text" id='studentName' placeholder='Sutter Kane' value={name} onChange = {handleNameChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='sutter.cane@gmail.com' value={email} onChange = {handleEmailChange}/>
                    <label htmlFor="phoneNumber">Contact Number</label>
                    <input type="text" id='phoneNumber' placeholder='123456789' value = {phoneNumber} onChange = {handleNumberChange}/>
                    <button onClick = {()=>setIsEditingGenInfo(true)}>Edit</button>
                    <input type="submit" value="submit" />
                </form>):
                (
                <div>
                    <div>{name}</div>
                    <div>{email}</div>
                    <div>{phoneNumber}</div>
                    <button onClick={()=> setIsEditingGenInfo(true)}>Edit</button>
                </div>
                )}


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
                        <div>{schoolName}</div>
                        <div>{year}</div>
                        <div>{degree}</div>
                        <button onClick={()=> setIsEditingEducation(true)}>Edit</button>
                    </div>
                )}

                {isEditingWorkExp?(<form className='workExpForm' onSubmit={handleSubmitWorkExp}>
                    <label htmlFor="companyName">Company</label>
                    <input type="text" id='name' placeholder='Ecorp' value={companyName} onChange={handleCompanyNameChange}/>
                    <label htmlFor="role">Role</label>
                    <input type="text" id='role' placeholder='CEO' value={role} onChange={handleRoleChange}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={handleDescChange}/>
                    <button onClick={()=>setIsEditingWorkExp(true)}>Edit</button>
                    <input type="submit" value="submit" />
                </form>):
                (
                    <div>
                        <div>{companyName}</div>    
                        <div>{role}</div>    
                        <div>{description}</div>    
                        <button onClick={()=> setIsEditingWorkExp(true)}>Edit</button>
                     </div>
                )}

                <div className='genInfo'>
                <h2>General Information</h2>
                <hr></hr>
                <div className='name'>{name}</div>
                <div className='email'>{email}</div>
                <div className='phoneNumber'>{phoneNumber}</div>
                </div>

                <div className='workExp'>
                    <h2>Work Experience</h2>
                    <hr></hr>
                    <div className='companyName'>{companyName}</div>
                    <div className='role'>{role}</div>
                    <div className='desc'>{description}</div>
                </div>

                <div className='education'>
                    <h2>Education</h2>
                    <hr />
                    <div>{schoolName}</div>
                    <div>{year}</div>
                    <div>{degree}</div>
                </div>
            </div>
    )
    
}






