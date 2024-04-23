import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import { Searchcon } from './Context/Searchcontext';
import 'sweetalert2/src/sweetalert2.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Searchcon>
   <Navbars/>
   <App />
   </Searchcon>
   </BrowserRouter>
  </React.StrictMode>
);


