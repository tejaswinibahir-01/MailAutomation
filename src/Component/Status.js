import {useState} from "react";
import './Dropdown-style.css';

const Status = ({status_selected,set_status_Selected,id,allSubTaskStatus,setallsubtask,iid}) => {
    const [isActive,setIsActive] = useState(false);
  const status_state = ['Remaining','Complete'];
const changeDone = (iid) =>{
  let temp =[...allSubTaskStatus];
temp[iid].status= 'Completed';
setallsubtask(temp);
set_status_Selected(temp);
console.log(temp);
console.log(iid);
}
const changeRemaining = (iid) =>{
  let temp =[...allSubTaskStatus];
temp[iid].status= 'Remaining';
setallsubtask(temp);
set_status_Selected(temp);
console.log(temp);
console.log(iid);
}
    return(
        <>
      
         <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => { setIsActive(!isActive)
  
     
      }}> {status_selected}
        <span className="fas fa-caret-down"></span></div>
{isActive && (<div className="dropdown-content">
  {allSubTaskStatus
                  .filter((task) => task.id === iid).map((task,i) => (
                    
 <div key={iid}>

 <div > <button onClick={()=>changeDone(iid-1)}>Complete</button></div>
<div > <button onClick={()=>changeRemaining(iid-1)}>Remaining</button></div>

</div>

  ))}
 
 
</div>)}


      </div>
        
        
        </>)

}

export default Status;