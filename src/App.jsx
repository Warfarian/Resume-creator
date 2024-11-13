import React, { useState } from 'react'
import './styles/App.css'
import GenInfo from './components/GenInfo.jsx'
import WorkExp from './components/WorkExp.jsx'
import Education from './components/Education.jsx'


function App() {

  return (
    <div className='resume'>
      <GenInfo />
      <Education />
      <WorkExp />
    </div>
  )
}

export default App
