import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');

const addEmployee = () =>{
  axios.post('localhost:3001/create')
}

  const displayInfo = () => {
    console.log(name + " " + age+ " " + country+ " " + position+ " " + wage);
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name:</label>
        <input type="text" onChange={(event)=>{setName(event.target.value)}}/>
        <label>Age:</label>
        <input type="number" onChange={(event)=>{setAge(event.target.value)}}/>
        <label>Country:</label>
        <input type="text" onChange={(event)=>{setCountry(event.target.value)}}/>
        <label>Position:</label>
        <input type="text" onChange={(event)=>{setPosition(event.target.value)}}/>
        <label>Wage (year):</label>
        <input type="number" onChange={(event)=>{setWage(event.target.value)}}/>
        <button onClick={displayInfo}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
