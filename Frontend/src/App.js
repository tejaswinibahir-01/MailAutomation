// App.js
import React from 'react';
import { Employee } from './EmployeePage';
import { Manager } from './ManagerPage';
import Button from 'react-bootstrap/Button';
import {LoginPage} from "./LoginPage";
// import Navbar from './Navbar';

const App=()=>{
    return(
        <>
        {/* <Button onClick={<Manager/>} variant="light">Manager</Button>
            
        <Button onClick={<Employee/>} variant="light">Employee</Button> */}
        <LoginPage/>
        </>

    )
}

export default App;