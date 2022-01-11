import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';
import {BrowserRoute as Router, Route} from 'react-router-dom';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';

function App() {
  return (
      <div className='main'>
      <div><h3>React operation</h3></div>
       <div><Create/></div>
       <div style={{margin: 20, padding: 30}}>
         <Read/>
       </div>
    </div>
  
  );
}

export default App;
