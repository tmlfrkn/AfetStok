import React from "react";
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignedIn from "./components/SignedIn"; // Geçici
import AboutUs from "./components/AboutUs";
import DashboardAdmin from "./components/DashboardAdmin";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";


function App() {

  
  return (


    <div>
     

     <Routes>
        <Route path="/signed-in" element={<SignedIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="*" element={<DashboardAdmin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>


  );
}

export default App;
