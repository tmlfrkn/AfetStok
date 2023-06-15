import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD15xx-WczyE29Ggnqi3cjyg9OKIZk_0gg",
  authDomain: "afetstok-4aa80.firebaseapp.com",
  projectId: "afetstok-4aa80",
  storageBucket: "afetstok-4aa80.appspot.com",
  messagingSenderId: "325797761358",
  appId: "1:325797761358:web:7cb8673b6860848652ce1f"
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
              randomAttributes.mont = Math.floor(Math.random() * 101); // Random number between 0 and 100
              randomAttributes.shoes = Math.floor(Math.random() * 101);
            } else if (collection === 'Food') {
              randomAttributes.bread = Math.floor(Math.random() * 101);
              randomAttributes.water = Math.floor(Math.random() * 101);
            } else if (collection === 'Medicine') {
              randomAttributes.pills = Math.floor(Math.random() * 101);
              randomAttributes.bandages = Math.floor(Math.random() * 101);
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