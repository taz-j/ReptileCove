import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import { BrowserRouter, Route, Link} from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Reptile Cove</h1>
      <Navbar/>
    </div>
  );
}

export default App;
