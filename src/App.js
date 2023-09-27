import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Progress_bar from './Component/Progress_bar';

import Main_Task_Table from './Component/Main_Task_Table';
function App() {
  const [selected,setSelected] = useState("Choose One");
  
  return (
    <>
    <h3 className="heading">Progress Bar</h3>
      {/*<Progress_bar bgcolor="orange" progress='100'  height={30} Total={10} Complete = {5}/>
      <Dropdown selected = {selected} setSelected={setSelected}/>*/}
      <Main_Task_Table />
    
    
    </>
  );
}

export default App;
