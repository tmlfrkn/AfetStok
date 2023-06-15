import React from "react";
import image from "./red.png"
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="container-aboutus">
            <div className="left-aboutus">
                <div className="image-div">
                    <img src={image} alt="image" className="logo-aboutus"></img>
                </div>
                <div className="link-container-aboutus">
                    <Link to="/j" className="link">Dashboard</Link>
                    <Link to="/" className="link">Contact</Link>
                    <Link to="/" className="link">About Us</Link>
                    <Link to="/" className="link ">Login</Link>
                </div>
            </div>

            <div className="right-aboutus">
                <div className="upper-div">
                    <div className="us">
                        <div className="sarper man"></div>
                        <div className="nurlan man"></div>
                        <div className="onur man"></div>
                        <div className="umut man"></div>
                        <div className="furkan man"></div>


                    </div>
                </div>

                <div className="lower-div">

                </div>
            </div>
        </div>
    )
}

export default AboutUs;