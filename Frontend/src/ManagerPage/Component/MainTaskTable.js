import styles from "../styles/Main_Task_Table.module.css";
import { useState } from "react";
import Sub_Task_Table from "./Sub_Task_Table";
import Progress_bar from "./Progress_bar";
import "./Dropdown-style.css";
import TaskContainer from "./TaskContainer";
import ProgressBar from "./ProgressBar";
import { Container } from "@mui/material";

const MainTaskTable = () => {
  const [allTask, setAllTask] = useState([
    { id: 1, taskId: 101, taskName: "Make excel Sheet", deadline: "9-11-2003" },
    { id: 2, taskId: 102, taskName: "Update website", deadline: "9-11-2003" },
    { id: 3, taskId: 103, taskName: "Create Interface", deadline: "9-11-2003" },
    { id: 4, taskId: 104, taskName: "Make Presntation", deadline: "9-11-2003" },
  ]);

  const [allSubTask, setAllSubTask] = useState([
    {
      srNO: 1,
      pid: 1,
      id: 1,
      taskID: 1011,
      subTaskName: "task 1",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
    {
      srNO: 2,
      pid: 1,
      id: 2,
      taskID: 1012,
      subTaskName: "task 2",
      subDeadline: "9-11-2003",
      status: "Completed",
    },
    {
      srNO: 3,
      pid: 1,
      id: 3,
      taskID: 1013,
      subTaskName: "task 3",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
    {
      srNO: 4,
      pid: 2,
      id: 1,
      taskID: 1021,
      subTaskName: "task 1",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
    {
      srNO: 5,
      pid: 2,
      id: 2,
      taskID: 1022,
      subTaskName: "task 2",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
    {
      srNO: 6,
      pid: 3,
      id: 1,
      taskID: 1031,
      subTaskName: "task 1",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
    {
      srNO: 7,
      pid: 4,
      id: 1,
      taskID: 1041,
      subTaskName: "task 1",
      subDeadline: "9-11-2003",
      status: "Remaining",
    },
  ]);
  const total = allSubTask.length;

  const complete = allSubTask.filter((allSubTask) =>
    allSubTask.status.includes("Completed")
  ).length;

  const remaining = allSubTask.filter((allSubTask) =>
  allSubTask.status.includes("Remaining")
).length;
  
  const delayed = allSubTask.filter((allSubTask) =>
  allSubTask.status.includes("Delayed")
).length;

  return (
    <>
      <Container sx={{ marginTop: "3%" }}>
        {" "}
        <h4>Progress bar</h4>
        <div className={styles["container"]}>
          <ProgressBar
            allTask={allTask}
            allSubTask={allSubTask}
            total={total}
            complete={complete}
            size={'97%'}
          />{" "}
          &nbsp; {complete}/{total}
        </div>
      </Container>

      {allTask.map((task, i) => {
        return (
          <>
            <TaskContainer
              allTask={allTask}
              id={i + 1}
              allSubTask={allSubTask}
              setAllSubTask={setAllSubTask}
            />
          </>
        );
      })}
    </>
  );
};

export default MainTaskTable;
