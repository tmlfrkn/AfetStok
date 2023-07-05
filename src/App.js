import React from "react";
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DashboardAdmin from "./components/DashboardAdmin";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import Veri from "./components/Veri.js"
import ContactAdmin from "./components/ContactAdmin"
import AboutUsAdmin from "./components/AboutUsAdmin"
import FirebaseInitializer from "./components/dbsetup";
import { ToastContainer } from 'react-toastify';

function App() {
  return (


  
    <div>
      <ToastContainer />
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-account" element={<SignUp />} />
        <Route path="/veri" element={<Veri />} />
        <Route path="/contact-admin" element={<ContactAdmin />} />
        <Route path="/about-us-admin" element={<AboutUsAdmin />} />
        
      </Routes>
      <ToastContainer />
    </div>
  

  );
}

export default App;