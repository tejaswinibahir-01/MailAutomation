import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Status from "./Status.js";
const SubTask = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Task Name</TableCell>
            <TableCell align="right">Deadline</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allSubTask
            .filter((subTask) => subTask.pid === props.id)
            .map((subTask, i) => (
           
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {subTask.taskID}
                </TableCell>
                <TableCell align="right">{subTask.subTaskName}</TableCell>
                <TableCell align="right">{subTask.subDeadline}</TableCell>
                <TableCell align="right">
                  <Status 
                    stat={subTask.status}
                    allSubTask={props.allSubTask}
                    id={props.id}
                    subId = {subTask.srNO}
                    setAllSubTask={props.setAllSubTask}
                  />
                 
                </TableCell>

              
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubTask;
