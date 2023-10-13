import IconWithText from "./IconWithText";

import {
  Accordion,
  Container,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SubTask from "./SubTask";
import ProgressBar from "./ProgressBar";
import styles from "../styles/TaskContainer.module.css";

const TaskContainer = (props) => {
  const total = props.allSubTask.filter(
    (subTask) => subTask.pid === props.id
  ).length;
  const complete = props.allSubTask.filter(
    (subTask) =>
      subTask.pid === props.id && subTask.status.includes("Completed")
  ).length;

  return (
    <>
      {props.allTask
        .filter((task) => task.id === props.id)
        .map((task, i) => {
          return (
            <Container maxWidth="lg" sx={{ marginTop: "3%" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                >
                  <IconWithText 
                    /*icon={<Person sx={{ marginRight: '5px' }} />}*/
                    content={
                      
                       
                        <div sx={{ }}className={styles["container"]}>
                          Task {`${task.taskId}`} : {`${task.taskName}`} , Deadline: &nbsp;
                          {`${task.deadline}`}&nbsp;
                          <ProgressBar size={'45%'}total={total} complete={complete} />
                          &nbsp; {complete}/{total}
                        </div>
                      
                    }
                    variant="h5"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <SubTask
                      allSubTask={props.allSubTask}
                      id={props.id}
                      setAllSubTask={props.setAllSubTask}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            </Container>
          );
        })}
    </>
  );
};

export default TaskContainer;
