import React ,{useState, useEffect } from 'react';
import {Navigate} from "react-router-dom"; 
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './loginPage.css';
import { Employee } from "../EmployeePage";
import { Manager } from '../ManagerPage';
import Atlas_Copco_Logo from "./Assets/Atlas_Copco_Logo.png";
import * as FaIcons from "react-icons/fa";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create(
  {
          baseURL: "http://127.0.0.1:8000",    
    });

const LoginPage=()=> {
    

  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Action,setaction]=useState("Manager");
    

  useEffect(() => {
    client.get("/api/user")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/login",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        email: email,
        password:password
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  if (currentUser)
  {
    return (
      <div>
        <form onSubmit={e => submitLogout(e)}>
          <div >{Action==="Employee"?<Employee/>:<Manager/>}  </div>
          <button type="submit" className='btn'>Log out</button>
          
        </form>
        
        
        {/* <div className="center">
          <h2>You're logged in!</h2>
        </div> */}
      </div>
      
    );
  }
  
  return (
  <>    
    {
      
      registrationToggle ? (
    
      <div className='register'>
      <div className="row">
      <div className="col-md-5 register_left">
        <img src={Atlas_Copco_Logo} alt=""/>
      </div>
      <div className="col-md-7 register_right">
      <div className='Login-container'>
          <div className="role-container">
            <div className={Action==="Employee"?"roleR grey":"roleR"} onClick={()=>{setaction("Manager")}}>Manager</div>
            <div className={Action==="Manager"?"roleL grey":"roleL"} onClick={()=>{setaction("Employee")}}>Employee</div>
          </div> 
          <div className="header">
            <div className="text">Register As {Action}</div>
          </div>
        <form onSubmit={e => submitRegistration(e)}>
        <div className="inputs">
          <div className="input" >
          <div className="icon"><FaIcons.FaEnvelope/></div>
            <input type="email" placeholder="Email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="input" >
            <div className="icon"><FaIcons.FaUser/></div>
            <input type="text" placeholder="Username" name='name' value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="input" >
            <div className="icon"><FaIcons.FaLock/></div>
            <input type="password" placeholder="Password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='submit-container' >
            <button className='btn' type="submit">
              Submit
            </button>
            <button className="btn" id="form_btn" onClick={update_form_btn}>Login</button>
          </div>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
        ) 
        : 
        (
        <div className='register'>
        <div className="row">
          <div className="col-md-5 register_left">
            <img src={Atlas_Copco_Logo} alt=""/>
          </div>
        <div className="col-md-7 register_right">
        <div className='Login-container'>
        <div className="role-container">
          <div className={Action==="Employee"?"roleR grey":"roleR"} onClick={()=>{setaction("Manager")}}>Manager</div>
          <div className={Action==="Manager"?"roleL grey":"roleL"} onClick={()=>{setaction("Employee")}}>Employee</div>
                        </div> 
                        <div className="header">
                            <div className="text">Login As {Action}</div>
                            <div className="Underline"></div>
                        </div>     
          <form onSubmit={e => submitLogin(e)}>
          <div className="inputs">
            <div className="input">
            <div className="icon"><FaIcons.FaEnvelope/></div>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
           
            
            <div className="input">
              <div className="icon"><FaIcons.FaLock/></div>
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          <div className='submit-container' >
          <button className='btn' type="submit">
            Submit
          </button>
          <button className='btn' id="form_btn" onClick={update_form_btn}>Register</button>
        </div>
        </div>
          </form>
      </div>
      </div>
      </div>
      </div>

        )
      
    }
    
  
</>
  );
}

export default LoginPage;
