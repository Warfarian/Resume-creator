import {useState} from 'react'

function GenInfo() {
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

    return(
        <div>
            <div className='resume'>
                <div className='genInfo'>
                    <h2>General Information</h2>
                    <hr></hr>
                    <div className='name'>{name}</div>
                    <div className='email'>{email}</div>
                    <div className='phoneNumber'>{phoneNumber}</div>
                </div>
            </div>

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
                <button onClick={()=> setIsEditingGenInfo(true)}>Edit</button>
            </div>
            )}
            </div>
    );
}

export {GenInfo}


