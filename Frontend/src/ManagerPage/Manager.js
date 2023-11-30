import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import MainTaskTable from "./Component/MainTaskTable";
import Dashboard from "./Component/Dashboard";
import UserProfile from "../ManagerPage/ProfilePage/ProfilePage"; // Import UserProfile

function Manager() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<MainTaskTable />} />
        <Route path="/profile" element={<UserProfile />} /> {/* Use UserProfile component */}
      </Routes>
    </BrowserRouter>
  );
}

export default Manager;
