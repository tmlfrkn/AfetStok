import React from "react";
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignedIn from "./components/SignedIn"; 
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import FirebaseInitializer from "./components/dbsetup";

function App() {

  // <FirebaseI../>
  return (


    <div>

      <Routes>
        <Route path="/signed-in" element={<SignedIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

    </div>


  );
}

export default App;
