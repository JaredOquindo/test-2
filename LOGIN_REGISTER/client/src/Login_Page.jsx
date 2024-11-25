import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import HomePage from './Home_Page';

function Login_Page() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home_Page');
    }
    return (
        <div className="LS_Container">
            <div className="Login_Form">
                <div className="LS_Logo">
                    <img src="LS_logo.png" alt="GymBro Logo" />
                </div>
                <h1>Log in to your Account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">
                        Log in
                    </button>
                </form>
                <p>Don't have an account? <Link to="/Signup_Page">Create an account</Link></p>
            </div>

            
            <div class="Welcome_Section">
                <img src="rightPanel.png" alt="background" class="LS_Background" />
                <div class="Welcome_Message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo"/>
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>
        </div>
    );
}

export default Login_Page;