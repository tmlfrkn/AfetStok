import React from "react";
import image from "./red.png";
import { Link } from "react-router-dom";
import "./Contact.css";
import accounts from "./images/socialmediaaccounts.jpg"

const Contact = () => {

    return (

        <div className="container-contact">
            <div className="left-contact">
                <div className="image-div">
                    <img src={image} alt="image" className="logo-contact"></img>
                </div>
                <div className="link-container-contact">
                    <Link to="/" className="link">Dashboard</Link>
                    <Link to="/contact" className="link">Contact</Link>
                    <Link to="/about-us" className="link">About Us</Link>
                    <Link to="/login" className="link ">Login</Link>
                </div>
            </div>

            <div className="right-contact">
                <div className="upper-div">
                    <div className="container-box">
                        <div className="contact-box">
                            <h3> Phone Numbers</h3>
                            <p>+90 538 824 1758</p>
                            <p>+90 532 669 3601</p>
                            <p>+90 552 826 7056</p>
                            <p>+90 524 772 8725</p>
                            <p>+90 533 960 7091</p>
                            <p>+90 538 824 1758</p>
                            <p>+90 532 669 3601</p>
                            <p>+90 552 826 7056</p>
                            <p>+90 524 772 8725</p> 
                            <p>+90 533 960 7091</p> 
                        </div>
                        <div className="contact-box">
                            <h3> Faxs </h3>
                            <p>+90 (212) 310 2416</p>
                            <p>+90 (212) 675 3254</p>
                            <p>+90 (212) 345 2234</p>
                            <p>+90 (212) 564 2345</p>
                            <p>+90 (212) 187 9747</p>
                            <p>+90 (212) 310 2416</p>
                            <p>+90 (212) 675 3254</p>
                            <p>+90 (212) 345 2234</p>
                            <p>+90 (212) 564 2345</p>
                            <p>+90 (212) 187 9747</p>

                        </div>
                        <div className="contact-box">
                            <h3> E-mails </h3>
                            <p>onnurd@gmail.com</p>
                            <p>sarpertoshiba@hotmail.com</p>
                            <p>onurdindaroglu@example.com</p>
                            <p>furkantemel@hotmail.com</p>
                            <p>umuturem@gmail.com</p>
                            <p>nurlan.guliyev2002@gmail.com</p>
                            <p>onnurd@gmail.com</p>
                            <p>sarpertoshiba@hotmail.com</p>
                            <p>onurdindaroglu@example.com</p>
                            <p>furkantemel@hotmail.com</p>
                            <p>umuturem@gmail.com</p>
                            <p>nurlan.guliyev2002@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="lower-div">

                    <img src = {accounts} className="accounts-img"></img>

                </div>
            </div>

        </div>
    )

}
export default Contact;