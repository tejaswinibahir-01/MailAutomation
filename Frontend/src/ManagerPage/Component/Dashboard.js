import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import ProfileCard from "../ProfileCard";

import "../Manager.css"; // Import the CSS file
import Profile_Img from "../Assets/Profile_Img.png";
import PieChart from "./PieChart";
const Dashboard = () => {
  // Fetch the user's name from local storage
  const userName = localStorage.getItem('userName');

  const [profilePics, setProfilePics] = useState([
    {
      id: 1,
      name: userName || 'John Doe', // Use the user's name if available, otherwise fallback to 'John Doe'
      profileImage: "https://example.com/path/to/profile-image.jpg",
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
      status: "Completed",
    },
    {
      srNO: 7,
      pid: 4,
      id: 1,
      taskID: 1041,
      subTaskName: "task 1",
      subDeadline: "9-11-2003",
      status: "Delayed",
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

      <div className="Progress">
        <p>Here is the progress of the team till now: </p>
      </div>
  
      <PieChart remaining={remaining} complete={complete} delayed={delayed}/>

    </>
  );
};

export default Dashboard;