import React from "react";
import image from "./red.png"
import "./AboutUs.css";
import { Link } from "react-router-dom";
import sarper from "./images/sarper.jpg";
import nurlan from "./images/nurlan.png";
import onur from "./images/onur.png";
import umuttt from "./images/umuttt.jpeg";
import furkan from "./images/furkan.png";
import linkedin from "./images/linkedin.png";
import dashboardimage from "./images/tab.png"
import aboutusimage from "./images/bookmarks.png"
import contactimage from "./images/share.png"
import loginimage from "./images/account-circle.png"

const AboutUsAdmin = () => {
    return (
        <div className="container-aboutus">
            <div className="left-aboutus">
                <div className="image-div">
                    <img src={image} alt="image" className="logo-aboutus"></img>
                </div>
                <div className="link-container-aboutus">
                    <div className="image-container-aboutus">
                        <img src={dashboardimage}></img>
                        <img src={aboutusimage}></img>
                        <img src={contactimage}></img>
                    </div>
                    <div className="link-about-v1">
                    <Link to="/dashboard-admin" className="link-about">Dashboard</Link>
                    <Link to="/contact-admin" className="link-about">Contact</Link>
                    <Link to="/about-us-admin" className="link-about">About Us</Link>
                    </div>
                </div>
                <div className="login-aboutus">
                    <img src={loginimage}></img>
                <Link to="/*" className="login-about">Log Out</Link>
                </div>
            </div>

            <div className="right-aboutus">
                <div className="upper-div">
                    <div className="us">
                        <div className="sarper man">
                            <img src={sarper} alt="sarp" className="image"></img>
                            <p className="name">Mehmet Sarper Kahvecioğlu</p>
                            <p className="side">Front-end Developer</p>
                            <Link to="https://tr.linkedin.com/in/sarper-kahvecio%C4%9Flu" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin"></img></Link>
                        </div>
                        <div className="nurlan man">
                            <img src={nurlan} alt="nurli" className="image"></img>
                            <p className="name">Nurlan Guliyev</p>
                            <p className="side">Front-end Developer</p>
                            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin"></img></Link>
                        </div>
                        <div className="onur man">
                            <img src={onur} alt="onur" className="image"></img>
                            <p className="name">Onur Dindaroğlu</p>
                            <p className="side">Back-end Developer</p>
                            <Link to="https://tr.linkedin.com/in/onur-dindaro%C4%9Flu-048a011b5" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin"></img></Link>
                        </div>
                        <div className="umut man">
                            <img src={umuttt} alt="umut" className="image"></img>
                            <p className="name">Umut Barış Ürem</p>
                            <p className="side">Back-end Developer</p>
                            <Link to="https://tr.linkedin.com/in/umut-bar%C4%B1%C5%9F-%C3%BCrem-5b94a018b" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin"></img></Link>
                        </div>
                        <div className="furkan man"><img src={furkan} alt="furkan" className="image"></img>
                            <p className="name">Furkan Temel</p>
                            <p className="side">Back-end Developer</p>
                            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin"></img></Link>

                        </div>


                    </div>
                </div>

                <div className="lower-div">
                    <div className="box-left box">
                        <div className="vision text">
                            Our Vision
                            </div>
                        <div className="inner">
                            At AfetStok, our vision is to build resilient communities by providing timely support and resources during natural disasters. We envision a world where individuals, families, and communities are well-prepared to face and recover from the devastating effects of natural calamities. Through our platform, we aim to empower people with the necessary tools, knowledge, and resources to minimize the impact of disasters and facilitate their path to recovery.
                            </div>

                    </div>
                    <div className="box-right box">
                        <div className="mission text">
                            Our Mission
                            </div>
                        <div className="inner">
                            Our mission at AfetStok is to establish a reliable and accessible platform that connects those affected by natural disasters with the assistance they need. We strive to create a community-driven ecosystem where individuals, organizations, and volunteers can come together to provide immediate relief and long-term support to disaster-stricken areas. Our mission is to ensure that essential supplies, emergency services, and humanitarian aid reach those in need efficiently and effectively.
                            </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUsAdmin;