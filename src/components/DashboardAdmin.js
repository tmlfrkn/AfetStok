import React from "react";
import "./DashboardAdmin.css";
import { Link } from "react-router-dom";
import image from "./red.png"
import dashboardimage from "./images/tab.png"
import aboutusimage from "./images/bookmarks.png"
import contactimage from "./images/share.png"
import loginimage from "./images/account-circle.png"

const DashboardAdmin = () => {


    return (
        <div class="container-dash">
            <div className="left-dash">
                <div className="image-dash">
                    <img src={image} alt="image" className="logo-dash"></img>
                </div>
                 
                <div className="link-container-dash">
                    <div className="image-container-dash">
                        <img src={dashboardimage}></img>
                        <img src={aboutusimage}></img>
                        <img src={contactimage}></img>
                    </div>
                    <div className="link-dash-v1">
                    <Link to="/" className="link-dash">Dashboard</Link>
                    <Link to="/contact" className="link-dash">Contact</Link>
                    <Link to="/about-us" className="link-dash">About Us</Link>
                    </div>
                </div>
                <div className="login-dashboard">
                    <img src={loginimage}></img>
                <Link to="/login" className="login-dash">Login</Link>
                </div>
            </div>

            <div className="right-dash">
                <div className="dash-upper-part">
                    <div className="dash-buttons up">
                        <button className="marmaris cities">Marmaris</button>
                        <button className="kahramanmaraş cities">Kahramanmaraş</button>
                        <button className="hatay cities">Hatay</button>
                        <button className="adana cities">Adana</button>
                    </div>
                    <div className="search-bar-div up">
                        <input className="search-bar-dash" type="text" placeholder="Search for city" />
                    </div>
                </div>
                <div className="dash-lower-part">
                    <div className="lower-upper-dash">
                        <button className="current-city low-up">Marmaris</button>
                        <button className="requirement-dash low-up">
                            Requirement List
                        </button>
                    </div>
                    <div className="lower-lower-dash">
                        <div className="buttons-dash-lower">
                            <button className="foods needs">Foods</button>
                            <button className="medical-hygiene needs">Medical/Hygiene</button>
                            <button className="clothes needs">Clothes</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashboardAdmin;