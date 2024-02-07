import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import necessary Font Awesome packages
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import  "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter as Router } from 'react-router-dom';
// Add the icons you want to use to the library
library.add(faCoffee, faAddressCard);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

 
  
  
);
