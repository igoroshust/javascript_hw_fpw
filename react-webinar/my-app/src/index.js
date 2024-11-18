import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from "react-dom";
import App from './App';
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Home /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/" element={ <App /> } />
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);