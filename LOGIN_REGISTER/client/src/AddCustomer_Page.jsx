import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../src/AddCustomer_Page.css';
function AddCustomer_Page(){
    return (
        <div className="container">
          <div className="logo">
            <img src="violet_logo.png" alt="GymBro_logo" />
          </div>
    
          {/* Sidebar */}
          <div className="content-wrapper">
            <nav className="SideBar">
              <ul className="navlinks">
                <li>
                  <a href="../YourGym/urgym.html">
                    <img
                      src="urgym.png"
                      alt="Your Gyms"
                      className="nav-icon"
                    />
                    Your Gyms
                  </a>
                </li>
                <li>
                  <a href="../bookmarks/bookmarks.html">
                    <img
                      src="bookmark.png"
                      alt="Bookmarks"
                      className="nav-icon"
                    />
                    Bookmarks
                  </a>
                </li>
                <li>
                  <a href="../insights/insights.html">
                    <img
                      src="insight.png"
                      alt="Insights"
                      className="nav-icon"
                    />
                    Insights
                  </a>
                </li>
                <li>
                  <a href="customers-page.html">
                    <img
                      src="customers.png"
                      alt="Customers"
                      className="nav-icon"
                    />
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="logout.png"
                      alt="Logout"
                      className="nav-icon"
                    />
                    Logout
                  </a>
                </li>
              </ul>
    
              <div className="userinfo">
                <a href="profile.html" className="userAcc">
                  <img
                    src="useravatar.png"
                    alt="User Profile"
                    className="user-avatar"
                  />
                  <span>Juan Dela Cruz</span>
                </a>
              </div>
            </nav>
    
            {/* Form for adding a customer */}
            <div className="main-content">
              <button id="goBackButton">
                <img
                  src="arrow-left.png"
                  alt="Back Icon"
                  className="button-icon"
                />
                Back
              </button>
              <h1>Add New Customer</h1>
              <form className="newCustomer-form">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                />
                <input
                  type="text"
                  name="contactnumber"
                  placeholder="Contact Number"
                  required
                />
                <input
                  type="text"
                  name="emergencynumber"
                  placeholder="Emergency Contact"
                  required
                />
    
                <div className="membership-checkbox">
                  <input type="checkbox" id="member" name="member" />
                  <label htmlFor="member">Membership</label>
                </div>
    
                <div className="membership-dates">
                  {/* Start Date */}
                  <div className="date-wrapper">
                    <label htmlFor="startDate">Start:</label>
                    <input
                      type="date"
                      id="startDate"
                      className="date-input"
                      placeholder="Starting Date"
                      required
                    />
                  </div>
    
                  {/* End Date */}
                  <div className="date-wrapper">
                    <label htmlFor="endDate">End:</label>
                    <input
                      type="date"
                      id="endDate"
                      className="date-input"
                      placeholder="End Date"
                      required
                    />
                  </div>
                </div>
    
                <div className="button-container">
                  <button type="submit">Confirm</button>
                  <button type="button" id="cancelButton">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}
  
export default AddCustomer_Page;