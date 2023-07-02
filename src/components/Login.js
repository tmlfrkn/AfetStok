import React, { useState } from "react";
import "./Login.css";
import image from "./red.png";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, app} from '../firebaseConfig';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/signed-in");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };  
  return (
        <div className="container">
            <div className="left">

                <img src={image} alt="image" className="logo"></img>
                <div className="link-container">
                    {/* <Link to="/j" className="link-item">Dashboard</Link>
                    <Link to="/" className="link-item">Contact</Link>
                    <Link to="/" className="link-item">About Us</Link>
                    <Link to="/" className="link-item login">Login</Link> */}
                    <Link to="/" className="link-item">AfetStok</Link>
                </div>

            </div>



            <div className="right">

                <div className="right-content">


                    <img src={image} alt="image" className="logo-right"></img>
                    <input  className="input" type="text"
                    placeholder="Authorized Number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                    <input className="input" type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                         />

                    <Link to="/signed-in">
                      <button className="button" onClick={handleSubmit}>Submit</button>
                    </Link>

                    <div className="buttons">
                        <Link className="forgot-password" to="/forgot-password">Forgotten Password?</Link>
                        <p>Don't have an account yet?
                            <Link className="signup" to="/new-account"> Signup</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;