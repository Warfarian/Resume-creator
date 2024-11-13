import './styles/App.css'
import {GenInfo} from './components/GenInfo.jsx'
import {WorkExp} from './components/WorkExp.jsx'
import {Education} from './components/Education.jsx'

export default function App() {
  return (
    <div className='container'>
      <div className='allForms'>
                <GenInfo />
                <Education />
                <WorkExp />
      </div>
    </div>
  );
}
