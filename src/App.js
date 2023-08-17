import React,{useState} from "react";
import List from "./Components/list";
import Data from './Components/data'


function App() {
  const[people, setPeople]=useState(Data);

  return (
    <div className="container">
        <h3 className='heading'>We are {people.length} Students</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
