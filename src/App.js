// App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import './styles.css'; // Import the CSS file

function App() {
    // Dummy data for demonstration, replace this with actual profile data
    const [profilePics] = useState([
        { id: 1, name: 'John Doe', profileImage: 'url_to_image1', designation: 'Manager', employeeId: 'EMP123' },
        // Add more profiles with name, image, designation, and employeeId as needed
    ]);

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
