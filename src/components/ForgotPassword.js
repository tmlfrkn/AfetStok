import React, { useState } from "react";
import "./ForgotPassword.css";
import image from "./red.png";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    return (
        <div className = "container-fp">
            <div className="left-fp">
                <img src = {image} alt = "image" className = "logo-fp"></img>
                <div className="link-container">
                    {/* <Link to="/j" className="link-item">Dashboard</Link>
                    <Link to="/" className="link-item">Contact</Link>
                    <Link to="/" className="link-item">About Us</Link>
                    <Link to="/" className="link-item login">Login</Link> */}
                    <Link to="/" className="link-item">AfetStok</Link>
                </div>

            </div>

            <div className="right-fp">
                <div className="right-content-fp">
                    <img src = {image} alt="image" className="logo-right-fp"></img>
                    <input type="text"
                    placeholder="Name Surname" />
                    <input type = "text"
                    placeholder="E-mail" />
                    <input type="text"
                    placeholder="Phone Number" />
                    <Link to = "/"> <button>Sign Up</button></Link>
                    <p>Already have an account? <Link className="toLogin" to= "/login"> Login</Link></p>

                </div>

            </div>

            
        </div>
    )
}

export default ForgotPassword;