import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import ProfileCard from "../ProfileCard";

import "../Manager.css"; // Import the CSS file
import Profile_Img from "../Assets/Profile_Img.png";
import PieChart from "./PieChart";
const Dashboard = () => {
  const [profilePics] = useState([
    {
      id: 1,
      name: "John Doe",
      profileImage: { Profile_Img },
      designation: "Manager",
      employeeId: "EMP123",
    },
    // Add more profiles with name, image, designation, and employeeId as needed
  ]);
  const [selected, setSelected] = useState("Choose One");

  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

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
  const remaining = allSubTask.filter((allSubTask) =>
  allSubTask.status.includes("Remaining")
).length;
  const complete = allSubTask.filter((allSubTask) =>
    allSubTask.status.includes("Completed")
  ).length;
  const delayed = allSubTask.filter((allSubTask) =>
  allSubTask.status.includes("Delayed")
).length;
  return (
    <>
      <div className="welcome-section">
        <h1>Welcome {profilePics[0].name},</h1>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
        <button>Request Report</button>
      </div>

      <div className="container">
        {profilePics.map((profile) => (
          <ProfileCard key={profile.id} employee={profile} />
        ))}
      </div>

  
      <PieChart remaining={remaining} complete={complete} delayed={delayed}/>

      {/* Add the notes section container here */}
      <div className="notes-section">
        <h2>Notes for self</h2>
        <textarea
          placeholder="Enter your notes here..."
          rows="5"
          cols="50"
        ></textarea>
      </div>
    </>
  );
};

export default Dashboard;
