import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
//import App from './App';
// import Home from './components/redhat/myredhat/home';
import reportWebVitals from './reportWebVitals';
import Redhat from "./components/redhat/myredhat/myredhat";

ReactDOM.render(

  <React.StrictMode>
    <Redhat/>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
