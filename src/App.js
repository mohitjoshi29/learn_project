import logo from './logo.svg';
import './App.css';
import { FormatName } from './FormatName';
import { useState } from 'react';

function App(props) {
  const [name,setName]=useState("mohit")

  const newfun = ((data)=>{
    setName(data)
  })
  return (
    <>
      <FormatName valu={name} fun={newfun}/>
    </>
  );
}
export default App;