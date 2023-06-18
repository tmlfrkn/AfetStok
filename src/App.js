import React from "react";
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignedIn from "./components/SignedIn"; // Geçici
import AboutUs from "./components/AboutUs";
import DashboardAdmin from "./components/DashboardAdmin";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import Veri from "./components/Veri.js"
import FirebaseInitializer from "./components/dbsetup";


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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-account" element={<SignUp />} />
        <Route path="/veri" element={<Veri />} />


      </Routes>

    </div>


  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyD15xx-WczyE29Ggnqi3cjyg9OKIZk_0gg",
//   authDomain: "afetstok-4aa80.firebaseapp.com",
//   projectId: "afetstok-4aa80",
//   storageBucket: "afetstok-4aa80.appspot.com",
//   messagingSenderId: "325797761358",
//   appId: "1:325797761358:web:7cb8673b6860848652ce1f"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const firestore = firebase.firestore();

// const App = () => {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         const citiesRef = firestore.collection('Cities');
//         const snapshot = await citiesRef.get();

//         const citiesData = await Promise.all(snapshot.docs.map(async doc => {
//           const data = doc.data();
//           const collections = ['Clothes', 'Food', 'Medicine'];
//           const cityCollections = {};

//           for (const collection of collections) {
//             const collectionSnapshot = await doc.ref.collection(collection).doc('document').get();
//             const collectionData = collectionSnapshot.data();
//             cityCollections[collection] = collectionData;
//           }

//           return { ...data, collections: cityCollections };
//         }));

//         setCities(citiesData);
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };

//     fetchCities();
//   }, []);

//   return (
//     <div>
//       <h1>Cities</h1>
//       {cities.map((city, index) => (
//         <div key={index}>
//           <h2>{city.name}</h2>
//           <h3>Clothes</h3>
//           <p>Shoes: {city.collections.Clothes.Shoes}</p>
//           <p>Coat: {city.collections.Clothes.coat}</p>
//           <h3>Food</h3>
//           <p>Bread: {city.collections.Food.bread}</p>
//           <p>Water: {city.collections.Food.water}</p>
//           <h3>Medicine</h3>
//           <p>Pills: {city.collections.Medicine.pills}</p>
//           <p>Bandages: {city.collections.Medicine.bandages}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
