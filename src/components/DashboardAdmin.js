import React, { useState, useEffect } from "react";
import "./DashboardAdmin.css";
import { Link } from "react-router-dom";
import image from "./red.png";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import dashboardimage from "./images/tab.png"
import aboutusimage from "./images/bookmarks.png"
import contactimage from "./images/share.png"
import loginimage from "./images/account-circle.png"
import search from "./images/search.png"
import Swal from 'sweetalert2';



const DashboardAdmin = () => {
  const [foodArray, setFoodArray] = useState([]);
  const [foodNames, setFoodNames] = useState([]);
  const [medicineArray, setMedicineArray] = useState([]);
  const [medicineNames, setMedicineNames] = useState([]);
  const [clothesArray, setClothesArray] = useState([]);
  const [clothesNames, setClothesNames] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  
  const allcities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
    'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
    'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
    'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa',
    'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
    'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
  ];

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

  const updateFirebaseData = async (cityName, collectionName, updatedData) => {
    try {
      const cityRef = firestore.collection('Cities').where('name', '==', cityName);
      const citySnapshot = await cityRef.get();

      if (!citySnapshot.empty) {
        const docRef = citySnapshot.docs[0].ref.collection(collectionName).doc('document');

        const existingDataSnapshot = await docRef.get();
        const existingData = existingDataSnapshot.data() || {};

        const newData = { ...existingData, ...updatedData };

        await docRef.set(newData);

        console.log(`Data in ${cityName}/${collectionName} updated successfully.`);
      } else {
        console.log('No city with name:', cityName);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDecrease = async (i, dataArray, setDataArray, collectionName, namesArray) => {
    const { value: inputValue } = await Swal.fire({
        title: 'Enter the decrease amount',
        input: 'number',
        inputPlaceholder: 'Enter a number'
    });

    const decreaseAmount = parseInt(inputValue);

    if (!isNaN(decreaseAmount)) {
      const updatedDataArray = [...dataArray];
      updatedDataArray[i - 1] = Math.max(updatedDataArray[i - 1] - decreaseAmount, 0);
      updatedDataArray[i - 1] = Math.min(updatedDataArray[i - 1], 1000); // Apply maximum constraint
      setDataArray(updatedDataArray);

      const updatedData = { [namesArray[i - 1]]: updatedDataArray[i - 1] };

      await updateFirebaseData(selectedCity, collectionName, updatedData);
    }
};

const handleIncrease = async (i, dataArray, setDataArray, collectionName, namesArray) => {
    const { value: inputValue } = await Swal.fire({
        title: 'Enter the increase amount',
        input: 'number',
        inputPlaceholder: 'Enter a number'
    });

    const increaseAmount = parseInt(inputValue);

    if (!isNaN(increaseAmount)) {
      const updatedDataArray = [...dataArray];
      updatedDataArray[i - 1] = Math.min(updatedDataArray[i - 1] + increaseAmount, 1000); // Apply maximum constraint
      updatedDataArray[i - 1] = Math.max(updatedDataArray[i - 1], 0); // Apply minimum constraint
      setDataArray(updatedDataArray);

      const updatedData = { [namesArray[i - 1]]: updatedDataArray[i - 1] };

      await updateFirebaseData(selectedCity, collectionName, updatedData);
    }
};




  // const handleDecrease = async (i, dataArray, setDataArray, collectionName, namesArray) => {
  //   const inputValue = prompt("Enter the decrease amount:");
  //   const decreaseAmount = parseInt(inputValue);

  //   if (!isNaN(decreaseAmount)) {
  //     const updatedDataArray = [...dataArray];
  //     updatedDataArray[i - 1] = Math.max(updatedDataArray[i - 1] - decreaseAmount, 0);
  //     updatedDataArray[i - 1] = Math.min(updatedDataArray[i - 1], 1000); // Apply maximum constraint
  //     setDataArray(updatedDataArray);

  //     const updatedData = { [namesArray[i - 1]]: updatedDataArray[i - 1] };

  //     await updateFirebaseData(selectedCity, collectionName, updatedData);
  //   }
  // };

  // const handleIncrease = async (i, dataArray, setDataArray, collectionName, namesArray) => {
  //   const inputValue = prompt("Enter the increase amount:");
  //   const increaseAmount = parseInt(inputValue);

  //   if (!isNaN(increaseAmount)) {
  //     const updatedDataArray = [...dataArray];
  //     updatedDataArray[i - 1] = Math.min(updatedDataArray[i - 1] + increaseAmount, 1000); // Apply maximum constraint
  //     updatedDataArray[i - 1] = Math.max(updatedDataArray[i - 1], 0); // Apply minimum constraint
  //     setDataArray(updatedDataArray);

  //     const updatedData = { [namesArray[i - 1]]: updatedDataArray[i - 1] };

  //     await updateFirebaseData(selectedCity, collectionName, updatedData);
  //   }
  // };

  const generateBoxes = (count, dataArray, setDataArray, collectionName, namesArray) => {
    const boxes = [];
    for (let i = 1; i <= count; i++) {
      boxes.push(
        <div className="outer-divv" key={i}>
          <div className="property">{namesArray[i - 1]}</div>
          <div className="left-minus buttonsss">
            <button className="handle" onClick={() => handleDecrease(i, dataArray, setDataArray, collectionName, namesArray)}>-</button>
          </div>
          <div className={`x${i} boxx`}>
            <div className="inner-box" style={{ width: `${dataArray[i - 1] / 10}%`, position: "relative" }}></div>
            <p className="values-of-boxes">{`${dataArray[i - 1]}/1000`}</p>
          </div>
          <div className="right-plus buttonsss">
            <button className="handle" onClick={() => handleIncrease(i, dataArray, setDataArray, collectionName, namesArray)}>+</button>
          </div>
        </div>
      );
    }
    return boxes;
  };

  const foodsBoxes = generateBoxes(11, foodArray, setFoodArray, 'Food', foodNames);
  const medicalBoxes = generateBoxes(11, medicineArray, setMedicineArray, 'Medicine', medicineNames);
  const clothesBoxes = generateBoxes(11, clothesArray, setClothesArray, 'Clothes', clothesNames);

  useEffect(() => {
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
                        <Link to="/dashboard-admin" className="link-about">Dashboard</Link>
                        <Link to="/contact-admin" className="link-about">Contact</Link>
                        <Link to="/about-us-admin" className="link-about">About Us</Link>
                    </div>
                </div>
                <div className="login-aboutus">
                    <img src={loginimage}></img>
                    <Link to="/*" className="login-about">Log out</Link>
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

export default DashboardAdmin;