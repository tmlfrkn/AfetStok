import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import image from "./red.png";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import dashboardimage from "./images/tab.png"
import aboutusimage from "./images/bookmarks.png"
import contactimage from "./images/share.png"
import loginimage from "./images/account-circle.png"

const Dashboard = () => {

    let [foodArray, setFoodArray] = useState([]);
    let [foodNames, setFoodNames] = useState([]);
    let [medicineArray, setMedicineArray] = useState([]);
    let [medicineNames, setMedicineNames] = useState([]);
    let [clothesArray, setClothesArray] = useState([]);
    let [clothesNames, setClothesNames] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const firestore = firebase.firestore();

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const citiesRef = firestore.collection('Cities');
                const citiesSnapshot = await citiesRef.get();
                const citiesData = citiesSnapshot.docs.map((doc) => doc.data().name);
                setCities(citiesData);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedCity === '') {
                    // Reset the data if no city is selected
                    setFoodArray([]);
                    setFoodNames([]);
                    setMedicineArray([]);
                    setMedicineNames([]);
                    setClothesArray([]);
                    setClothesNames([]);
                    return;
                }

                const cityRef = firestore.collection('Cities').where('name', '==', selectedCity);
                const citySnapshot = await cityRef.get();

                if (!citySnapshot.empty) {
                    const foodRef = citySnapshot.docs[0].ref.collection('Food').doc('document');
                    const foodSnapshot = await foodRef.get();
                    const foodData = foodSnapshot.data();
                    const medicineRef = citySnapshot.docs[0].ref.collection('Medicine').doc('document');
                    const medicineSnapshot = await medicineRef.get();
                    const medicineData = medicineSnapshot.data();
                    const clothesRef = citySnapshot.docs[0].ref.collection('Clothes').doc('document');
                    const clothesSnapshot = await clothesRef.get();
                    const clothesData = clothesSnapshot.data();

                    setFoodNames(Object.keys(foodData));
                    setFoodArray(Object.values(foodData));
                    setMedicineNames(Object.keys(medicineData));
                    setMedicineArray(Object.values(medicineData));
                    setClothesNames(Object.keys(clothesData));
                    setClothesArray(Object.values(clothesData));
                } else {
                    console.log('No city with name:', selectedCity);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedCity]);


    function generateBoxes(count, dataArray, namesArray) {
        const boxes = [];
        for (let i = 1; i <= count; i++) {
        
    
    
          boxes.push(
            <div className="outer-divv" key={i}>
              <div className="property">{namesArray[i - 1]}</div>
              <div className={`x${i} boxx`}>
              
                <div
                  className="inner-box"
                  style={{ width: `${dataArray[i - 1]/10}%`, position: "relative" }}
                >
                </div>
                <p className="values-of-boxes">{`${dataArray[i - 1]}/1000`}</p>
              </div>

            </div>
          );
        }
        return boxes;
      }
      
      
      const foodsBoxes = generateBoxes(11, foodArray, foodNames);
      const medicalBoxes = generateBoxes(11, medicineArray, medicineNames);
      const clothesBoxes = generateBoxes(11, clothesArray, clothesNames);

      useEffect(() => {
        // Set İzmir as the default city when the component mounts
        setSelectedCity('İzmir');
      }, []);

      

      
    

    return (
        <div className="container-dash">
            <div className="left-dash">
                <div className="image-dash">
                    <img src={image} alt="image" className="logo-dash"></img>
                </div>
                <div className="link-container-aboutus">
                    <div className="image-container-aboutus">
                        <img src={dashboardimage}></img>
                        <img src={aboutusimage}></img>
                        <img src={contactimage}></img>
                    </div>
                    <div className="link-about-v1">
                    <Link to="/" className="link-about">Dashboard</Link>
                    <Link to="/contact" className="link-about">Contact</Link>
                    <Link to="/about-us" className="link-about">About Us</Link>
                    </div>
                </div>
                <div className="login-aboutus">
                    <img src={loginimage}></img>
                <Link to="/login" className="login-about">Log in</Link>
                </div>
            </div>

            <div className="right-dash">
                <div className="dash-upper-part">
                    <div className="dash-buttons up">
                        <button className="marmaris cities" onClick={() => setSelectedCity('İzmir')}>İzmir</button>
                        <button className="kahramanmaraş cities" onClick={() => setSelectedCity('Kahramanmaraş')}>Kahramanmaraş</button>
                        <button className="hatay cities" onClick={() => setSelectedCity('Hatay')}>Hatay</button>
                        <button className="adana cities" onClick={() => setSelectedCity('Adana')}>Adana</button>
                    </div>
                    <div className="search-bar-div up">
                          <input
                            className="search-bar-dash"
                            type="text"
                            placeholder="Search for city"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const userInput = searchInput.toLowerCase();
                                const selectedCity = allcities.find(city => city.toLowerCase() === userInput);
                                if (selectedCity) {
                                  setSelectedCity(selectedCity);
                                }
                              }
                            }}
                            onChange={(e) => setSearchInput(e.target.value)}
                          />
                        </div>
                </div>
                <div className="dash-lower-part">
                    <div className="lower-upper-dash">
                        <button className="current-city low-up">{selectedCity}</button>
                        <button className="requirement-dash low-up">
                            Requirement List
                        </button>
                    </div>

                    <div className="lower-lower-dash">
                        <div className="buttons-dash-lower">
                            <div className="foods needs">
                                <div className="property-heading">
                                    <h2>Foods</h2>
                                </div>
                                <div className="boxes-container">
                                    {foodsBoxes}
                                </div>
                            </div>

                            <div className="medical-hygiene needs">
                                <div className="property-heading">
                                    <h2>Medical/Hygiene</h2>
                                </div>
                                <div className="boxes-container">
                                    {medicalBoxes}
                                </div>
                            </div>

                            <div className="clothes needs">
                                <div className="property-heading">
                                    <h2>Clothes</h2>
                                </div>
                                <div className="boxes-container">
                                    {clothesBoxes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;