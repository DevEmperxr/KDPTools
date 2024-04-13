// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY  ,
  authDomain: process.env.REACT_APP_AUTHDOMAIN  ,
  projectId:  process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET  ,
  messagingSenderId: process.env.REACT_APP_MSID  ,
  appId:  process.env.REACT_APP_APPID
};

// Initialize Firebase
console.log(process.env.REACT_APP_APIKEY)
export const app = initializeApp(firebaseConfig);