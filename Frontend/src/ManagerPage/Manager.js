// App.js 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './Navbar';
import Progress_bar from './Component/Progress_bar';
import ProfileCard from './ProfileCard';

import './Manager.css'; // Import the CSS file
import Profile_Img from "./Assets/Profile_Img.png";
import MainTaskTable from './Component/MainTaskTable';
import Dashboard from "./Component/Dashboard";

function Manager() {
    // Dummy data for demonstration, replace this with actual profile data
    
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={ <Dashboard />} />
            <Route path="/projects" element={ <MainTaskTable />} /></Routes>
          
            
        </BrowserRouter>
    );

    
}

export default Manager;
