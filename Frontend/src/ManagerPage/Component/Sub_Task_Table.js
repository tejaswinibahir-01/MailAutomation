import { useState } from "react";
import styles from "../styles/Main_Task_Table.module.css";
import Status from "./Status";
import './Dropdown-style.css';
const Sub_Task_Table = ({ selected, setSelected, id,alltask,setalltask }) => {
  const [status_selected, set_status_Selected] = useState("Remaining");
  const [isActive, setIsActive] = useState(false);
 
  return (
    <>
      <div>
        <div
          className="dropdown-btn"
          onClick={(e) => {
            setIsActive(!isActive);
            console.log(e);
          }}
        >
          {" "}
          {selected}
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            <table className={styles["data-tables"]}>
              <caption className={styles["data-captions-subtable"]}>
                All Sub - Tasks
              </caption>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
                {alltask
                  .filter((task) => task.pid === id)
                  .map((task, i) => (
                    <>
                      <div
                        onClick={(e) => {
                          setSelected(task);
                          setIsActive(false);
                        }}
                        className="dropdown-item"
                      >
                        {/*<Update_task status_selected = {status_selected} setStatusSelected={setStatusSelected}/>*/}
                      </div>
                      <tr key={i}>
                        <td>{task.id}</td>
                        <td>{task.subName}</td>
                        <td>{task.date}</td>
                        <td>
                          
                          {<Status
                            status_selected={task.status}
                            set_status_Selected={set_status_Selected}
                            id= {task.pid}
                            iid = {task.id}
                            allSubTaskStatus = {alltask}
                            setallsubtask = {setalltask}
                    />}
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Sub_Task_Table;
