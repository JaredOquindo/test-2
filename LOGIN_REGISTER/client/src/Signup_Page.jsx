import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import Login_Page from './Login_Page';

function Signup_Page() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        
        navigate('/Login_Page');
    };

    return (
        <div className="LS_Container">
            <div className="Login_Form">
                <div className="LS_Logo">
                    <img src="LS_logo.png" alt="GymBro Logo" />
                </div>
                <h2>Welcome to GymBro!</h2>
                <h5>Register your account</h5>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name" 
                        required 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name" 
                        required 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="confirmation" 
                        placeholder="Confirm Password" 
                        required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Create Account</button>
                </form>
                <p>Already have an account? <Link to="/Login_Page">Log In</Link></p>
            </div>

            <div className="Welcome_Section">
                <img src="rightPanel.png" alt="background" className="LS_Background" />
                <div className="Welcome_Message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo" />
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>

        </div>
        
    );
}

export default Signup_Page;