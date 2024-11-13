import { useState } from "react";


function WorkExp(){
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

    return(
        <div>
            <div className='resume'>
                    <div className='workExp'>
                        <h2>Work Experience</h2>
                        <hr></hr>
                        <div className='companyName'>{companyName}</div>
                        <div className='role'>{role}</div>
                        <div className='desc'>{description}</div>
                    </div>
            </div>

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
                        <button onClick={()=> setIsEditingWorkExp(true)}>Edit</button>
                     </div>
                )}
            </div>
    );
}


export {WorkExp}