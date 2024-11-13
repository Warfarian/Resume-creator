import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Education(props){
    return(
        <div className='education'>
            <h2>Education</h2>
            <hr />
            <div>{props.schoolName}</div>
            <div>{props.year}</div>
            <div>{props.degree}</div>
        </div>
    );
}

Education.propTypes= {
    schoolName : PropTypes.string,
    year: PropTypes.string,
    degree: PropTypes.string,
}

Education.defaultProps = {
    schoolName : "Harvard",
    year: "2021 - 2025",
    degree: 'Bachelor of Tech',
}