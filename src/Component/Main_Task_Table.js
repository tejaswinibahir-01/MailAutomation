import styles from "../styles/Main_Task_Table.module.css"
import {useState} from "react";
import Sub_Task_Table from "./Sub_Task_Table";
import Progress_bar from "./Progress_bar";
import './Dropdown-style.css';

const Main_Task_Table= () => {
    const [alltask,setalltask] =  useState([ { pid: 1, id: 1, name: "Dee", status: "remaining", date: "5-5-12" },
    { pid: 1, id: 2, name: "Pat", status: "Completed", date: "4-5-12" },
    { pid: 2, id: 3, name: "Tan", status: "remaining", date: "6-5-12" },
    { pid: 2, id: 4, name: "Crank", status: "remaining", date: "7-5-12" },
    { pid: 3, id: 5, name: "Jay Sir", status: "remaining", date: "8-5-12" },
    { pid: 4, id: 6, name: "Ahjhoo Sir", status: "remaining", date: "9-5-12" },]);
    const [selected,setSelected] = useState("Sub-Tasks");

    const total = alltask.length;
    console.log(total);
const complete = alltask.filter(alltask => alltask.status.includes('Completed')).length;
    return (
    <>
    <Progress_bar bgcolor="orange" progress='100'  height={30} total={total} complete = {complete}/>
    <div>
        <table  className={styles["data-tables"]}>
        <caption className={styles["data-captions"]}>All Tasks</caption>
        <tbody>
          
            <tr>
                <th>#</th>
                <th>Task</th>
                <th>Date</th>
                

              </tr>
              {alltask.length === 0 && (
                <tr>
                  <td
                    style={{ padding: "50px", fontWeight: "bold" }}
                    colSpan={3}
                  >
                    No Tasks
                  </td>
                </tr>
              )}
              {alltask
                .map((task, i) => {
                  return (
                    <>
                    <tr key={i}>
                     {/* <td>{bid.id}</td>*/}
                     <td >{task.id}</td>
                     <td >{task.name}</td>
                      <td >{task.date}</td>
                      
                    </tr>
                    <tr  style={{fontWeight: "bold" }} >
                      <td colspan={4}> <Sub_Task_Table selected = {selected} setSelected={setSelected} alltask={alltask} setalltask={setalltask} id = {task.id}/></td> 
                    </tr>
                    </>
                  );
                })}
           
            </tbody>
        </table>
    </div>
    </>
)

}

export default Main_Task_Table;