import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function WorkExp(props){
    return(
        <div className='workExp'>
            <h2>Work Experience</h2>
            <hr></hr>
            <div className='name'>{props.companyName}</div>
            <div className='email'>{props.role}</div>
            <div className='phoneNumber'>{props.description}</div>
        </div>
    );
}

WorkExp.propTypes= {
    companyName : PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
}

WorkExp.defaultProps = {
    companyName : "Evil inc",
    role: "CEO",
    description: <ul>
        <li>"did X by Y resulting in Z"</li>
        <li>"did X by Y resulting in Z"</li>
        <li>"did X by Y resulting in Z"</li>
    </ul>,
}