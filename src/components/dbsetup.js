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

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

// const FirebaseInitializer = () => {
//     const createDatabase = async () => {
//       try {
//         const cities = [
//           'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
//           'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
//           'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
//           'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
//           'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
//           'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
//           'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa',
//           'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
//           'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
//         ];
  
//         for (let i = 0; i < cities.length; i++) {
//           const cityData = {
//             name: cities[i],
//           };
  
//           const cityRef = firestore.collection('Cities').doc((i + 1).toString());
//           await cityRef.set(cityData);
  
//           const collections = ['Clothes', 'Food', 'Medicine'];
  
//           for (const collection of collections) {
//             const collectionRef = cityRef.collection(collection).doc('document');
//             const randomAttributes = {};
  
//             if (collection === 'Clothes') {
//               randomAttributes.Mont = Math.floor(Math.random() * 101); // Random number between 0 and 100
//               randomAttributes.Shoes = Math.floor(Math.random() * 101);
//             } else if (collection === 'Food') {
//               randomAttributes.Bread = Math.floor(Math.random() * 101);
//               randomAttributes.Water = Math.floor(Math.random() * 101);
//             } else if (collection === 'Medicine') {
//               randomAttributes.Pills = Math.floor(Math.random() * 101);
//               randomAttributes.Bandages = Math.floor(Math.random() * 101);
//             }
  
//             await collectionRef.set(randomAttributes);
//           }
//         }
  
//         console.log('Database creation successful.');
//       } catch (error) {
//         console.error('Error creating database:', error);
//       }
//     };
  
//     createDatabase();
  
//     return null;
//   };

  
// export default FirebaseInitializer;





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

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

// const FirebaseInitializer = () => {
//   const createDatabase = async () => {
//     try {
//       const cities = [
//         'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
//         'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
//         'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
//         'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
//         'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
//         'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
//         'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa',
//         'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
//         'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
//       ];

//       for (let i = 0; i < cities.length; i++) {
//         const cityData = {
//           name: cities[i],
//         };

//         const cityRef = firestore.collection('Cities').doc((i + 1).toString());
//         await cityRef.set(cityData);

//         const collections = ['Clothes', 'Food', 'Medicine'];

//         for (const collection of collections) {
//           const collectionRef = cityRef.collection(collection).doc('document');
//           const randomAttributes = {};

//           if (collection === 'Clothes') {
//             randomAttributes.Trousers = Math.floor(Math.random() * 101); // Random number between 0 and 100
//             randomAttributes.Coats = Math.floor(Math.random() * 101);
//             randomAttributes.Cardigan = Math.floor(Math.random() * 101);
//             randomAttributes.TShirts = Math.floor(Math.random() * 101);
//             randomAttributes.Shorts = Math.floor(Math.random() * 101);
//             randomAttributes.Jacket = Math.floor(Math.random() * 101);
//             randomAttributes.Sock = Math.floor(Math.random() * 101);
//             randomAttributes.UnderwearMale = Math.floor(Math.random() * 101);
//             randomAttributes.UnderwearWomen = Math.floor(Math.random() * 101);
//             randomAttributes.UnderwearChild = Math.floor(Math.random() * 101);
//             randomAttributes.CoatChild = Math.floor(Math.random() * 101);
//             randomAttributes.Tracksuit = Math.floor(Math.random() * 101);
//           } else if (collection === 'Food') {
//             randomAttributes.FruitJuice = Math.floor(Math.random() * 101);
//             randomAttributes.Milk = Math.floor(Math.random() * 101);
//             randomAttributes.Bread = Math.floor(Math.random() * 101);
//             randomAttributes.Meat = Math.floor(Math.random() * 101);
//             randomAttributes.Cookie = Math.floor(Math.random() * 101);
//             randomAttributes.Cracker = Math.floor(Math.random() * 101);
//             randomAttributes.Biscuit = Math.floor(Math.random() * 101);
//             randomAttributes.Fame = Math.floor(Math.random() * 101);
//             randomAttributes.Rice = Math.floor(Math.random() * 101);
//             randomAttributes.BulgurWheat = Math.floor(Math.random() * 101);
//             randomAttributes.Oil = Math.floor(Math.random() * 101);
//           } else if (collection === 'Medicine') {
//             randomAttributes.Antibiotic = Math.floor(Math.random() * 101);
//             randomAttributes.Painkiller = Math.floor(Math.random() * 101);
//             randomAttributes.WetWipes = Math.floor(Math.random() * 101);
//             randomAttributes.Pad = Math.floor(Math.random() * 101);
//             randomAttributes.Diaper = Math.floor(Math.random() * 101);
//             randomAttributes.Bandage = Math.floor(Math.random() * 101);
//             randomAttributes.Shampoo = Math.floor(Math.random() * 101);
//             randomAttributes.Cologne = Math.floor(Math.random() * 101);
//             randomAttributes.Antipyretic = Math.floor(Math.random() * 101);
//             randomAttributes.BurnCream = Math.floor(Math.random() * 101);
//             randomAttributes.Napkin = Math.floor(Math.random() * 101);
//             randomAttributes.Vitamin = Math.floor(Math.random() * 101);
//           }

//           await collectionRef.set(randomAttributes);
//         }
//       }

//       console.log('Database creation successful.');
//     } catch (error) {
//       console.error('Error creating database:', error);
//     }
//   };

//   createDatabase();

//   return null;
// };

// export default FirebaseInitializer;



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

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const FirebaseInitializer = () => {
  const createDatabase = async () => {
    try {
      const cities = [
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

      for (let i = 0; i < cities.length; i++) {
        const cityData = {
          name: cities[i],
        };

        const cityRef = firestore.collection('Cities').doc((i + 1).toString());
        await cityRef.set(cityData);

        const collections = ['Clothes', 'Food', 'Medicine'];

        for (const collection of collections) {
          const collectionRef = cityRef.collection(collection).doc('document');
          const randomAttributes = {};

          if (collection === 'Clothes') {
            randomAttributes.Trousers = Math.floor(Math.random() * 1001);
            randomAttributes.Coats = Math.floor(Math.random() * 1001);
            randomAttributes.Cardigan = Math.floor(Math.random() * 1001);
            randomAttributes.TShirts = Math.floor(Math.random() * 1001);
            randomAttributes.Shorts = Math.floor(Math.random() * 1001);
            randomAttributes.Jacket = Math.floor(Math.random() * 1001);
            randomAttributes.Sock = Math.floor(Math.random() * 1001);
            randomAttributes.UnderwearMale = Math.floor(Math.random() * 1001);
            randomAttributes.UnderwearWomen = Math.floor(Math.random() * 1001);
            randomAttributes.UnderwearChild = Math.floor(Math.random() * 1001);
            randomAttributes.CoatChild = Math.floor(Math.random() * 1001);
            randomAttributes.Tracksuit = Math.floor(Math.random() * 1001);
          } else if (collection === 'Food') {
            randomAttributes.FruitJuice = Math.floor(Math.random() * 1001);
            randomAttributes.Milk = Math.floor(Math.random() * 1001);
            randomAttributes.Bread = Math.floor(Math.random() * 1001);
            randomAttributes.Meat = Math.floor(Math.random() * 1001);
            randomAttributes.Cookie = Math.floor(Math.random() * 1001);
            randomAttributes.Cracker = Math.floor(Math.random() * 1001);
            randomAttributes.Biscuit = Math.floor(Math.random() * 1001);
            randomAttributes.Fame = Math.floor(Math.random() * 1001);
            randomAttributes.Rice = Math.floor(Math.random() * 1001);
            randomAttributes.BulgurWheat = Math.floor(Math.random() * 1001);
            randomAttributes.Oil = Math.floor(Math.random() * 1001);
          } else if (collection === 'Medicine') {
            randomAttributes.Antibiotic = Math.floor(Math.random() * 1001);
            randomAttributes.Painkiller = Math.floor(Math.random() * 1001);
            randomAttributes.WetWipes = Math.floor(Math.random() * 1001);
            randomAttributes.Pad = Math.floor(Math.random() * 1001);
            randomAttributes.Diaper = Math.floor(Math.random() * 1001);
            randomAttributes.Bandage = Math.floor(Math.random() * 1001);
            randomAttributes.Shampoo = Math.floor(Math.random() * 1001);
            randomAttributes.Cologne = Math.floor(Math.random() * 1001);
            randomAttributes.Antipyretic = Math.floor(Math.random() * 1001);
            randomAttributes.BurnCream = Math.floor(Math.random() * 1001);
            randomAttributes.Napkin = Math.floor(Math.random() * 1001);
            randomAttributes.Vitamin = Math.floor(Math.random() * 1001);
          }

          await collectionRef.set(randomAttributes);
        }
      }

      console.log('Database creation successful.');
    } catch (error) {
      console.error('Error creating database:', error);
    }
  };

  createDatabase();

  return null;
};

export default FirebaseInitializer;
