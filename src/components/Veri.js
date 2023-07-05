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
// const Veri = () => {
//     const [cities, setCities] = useState([]);
  
//     useEffect(() => {
//       const fetchCities = async () => {
//         try {
//           const citiesRef = firestore.collection('Cities');
//           const snapshot = await citiesRef.get();
  
//           const citiesData = await Promise.all(snapshot.docs.map(async doc => {
//             const data = doc.data();
//             const collections = ['Clothes', 'Food', 'Medicine'];
//             const cityCollections = {};
  
//             for (const collection of collections) {
//               const collectionSnapshot = await doc.ref.collection(collection).doc('document').get();
//               const collectionData = collectionSnapshot.data();
//               cityCollections[collection] = collectionData;
//             }
  
//             return { ...data, collections: cityCollections };
//           }));
  
//           setCities(citiesData);
//         } catch (error) {
//           console.error('Error fetching cities:', error);
//         }
//       };
  
//       fetchCities();
//     }, []);
  
//     return (
//       <div>
//         <h1>Cities</h1>
//         {cities.map((city, index) => (
//           <div key={index}>
//             <h2>{city.name}</h2>
//             <h3>Clothes</h3>
//             <p>Shoes: {city.collections.Clothes.Shoes}</p>
//             <p>Coat: {city.collections.Clothes.Coat}</p>
//             <h3>Food</h3>
//             <p>Bread: {city.collections.Food.bread}</p>
//             <p>Water: {city.collections.Food.water}</p>
//             <h3>Medicine</h3>
//             <p>Pills: {city.collections.Medicine.pills}</p>
//             <p>Bandages: {city.collections.Medicine.bandages}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Veri;
  
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxREvmKPhW0l6L9rcHhkfeb2IYErAYyX8",
  authDomain: "afetstokfinal.firebaseapp.com",
  projectId: "afetstokfinal",
  storageBucket: "afetstokfinal.appspot.com",
  messagingSenderId: "120354229476",
  appId: "1:120354229476:web:a14d8de8bc485705dab0f1",
  measurementId: "G-FWT0MTCSZ7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const Veri = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesRef = firestore.collection('Cities');
        const snapshot = await citiesRef.get();

        const citiesData = await Promise.all(snapshot.docs.map(async doc => {
          const data = doc.data();
          const collections = ['Clothes', 'Food', 'Medicine'];
          const cityCollections = {};

          for (const collection of collections) {
            const collectionSnapshot = await doc.ref.collection(collection).doc('document').get();
            const collectionData = collectionSnapshot.data();
            cityCollections[collection] = collectionData;
          }

          return { ...data, collections: cityCollections };
        }));

        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>Cities</h1>
      <select onChange={(e) => handleCitySelect(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div>
          <h2>{selectedCity}</h2>
          {Object.entries(cities.find((city) => city.name === selectedCity)?.collections).map(([collectionName, collectionData]) => (
            <div key={collectionName}>
              <h3>{collectionName}</h3>
              {Object.entries(collectionData).map(([fieldName, fieldValue]) => (
                <p key={fieldName}>{fieldName}: {fieldValue}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Veri;
