// App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Progress_bar from './Component/Progress_bar';
import ProfileCard from './ProfileCard';
import Main_Task_Table from './Component/Main_Task_Table';
import './styles.css'; // Import the CSS file
import Profile_Img from "./Assets/Profile_Img.png";

function App() {
    // Dummy data for demonstration, replace this with actual profile data
    const [profilePics] = useState([
        { id: 1, name: 'John Doe', profileImage:{Profile_Img} , designation: 'Frontend Developer', employeeId: 'EMP123' },
        // Add more profiles with name, image, designation, and employeeId as needed
    ]); 
    const [selected,setSelected] = useState("Choose One");

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <div>
            <Navbar />
            <div className='welcome-section'>
                <h1>Welcome {profilePics[0].name},</h1>
                <p>{formattedDate}</p>
                <p>{formattedTime}</p>
                <button>Request Report</button>
            </div>

            <div className='container'>
                {profilePics.map((profile) => (
                    <ProfileCard key={profile.id} employee={profile} />
                ))}
            </div>

            <div className='progressTable'>
                <h2 className="progressheading">Progress Bar</h2>
                {/*<Progress_bar bgcolor="orange" progress='100'  height={30} Total={10} Complete = {5}/>
                <Dropdown selected = {selected} setSelected={setSelected}/>*/}
                <Main_Task_Table />
            </div>

            {/* Add the notes section container here */}
            <div className="notes-section">
                <h2>Notes for self</h2>
                <textarea
                    placeholder="Enter your notes here..."
                    rows="5"
                    cols="50"
                ></textarea>
            </div>
        </div>
    );
}

export default App;
