import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";
import Summary from "./Summary";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Summary />
      <Temperature />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
