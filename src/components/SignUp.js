import React, { useState } from "react";
import "./SignUp.css";
import image from "./red.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container-su">
            <div className="left-su">
            <img src = {image} alt = "image" className = "logo-su"></img>
                <div className="link-container">
                    {/* <Link to="/j" className="link-item">Dashboard</Link>
                    <Link to="/" className="link-item">Contact</Link>
                    <Link to="/" className="link-item">About Us</Link>
                    <Link to="/" className="link-item login">Login</Link> */}
                    <Link to="/" className="link-item">AfetStok</Link>
                </div>


            </div>
            <div className="right-su">
                <div className="right-content-su">
                    <img src = {image} alt="image" className="logo-right-su"></img>
                    <input type="text"
                    placeholder="Name Surname" />
                    <input type = "text"
                    placeholder="E-mail" />
                    <input type = "text"
                    placeholder="Phone Number" />
                    <Link to= "/"><button>Sign Up</button></Link>
                    <p>Already have an account? 
                        <Link className="toLogin" to= "/login">Login</Link>
                    </p>

                </div>
            </div>

        </div>
    )
}
export default SignUp;