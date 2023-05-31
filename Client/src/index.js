import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaoXWkC7oecrKs40uIUfL9me5rswxNkJc",
  authDomain: "urlshorterner-f3fca.firebaseapp.com",
  projectId: "urlshorterner-f3fca",
  storageBucket: "urlshorterner-f3fca.appspot.com",
  messagingSenderId: "943204424543",
  appId: "1:943204424543:web:7c3e41ee6dc1c6093af4ea",
  measurementId: "G-3HL3S5EFNC"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
