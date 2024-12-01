import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { render } from "react-dom";
// import Home from "./components/Home/Home";
// import Users from "./components/Users/Users";
// import User from "./components/User/User";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
    <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <Home /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/users/:id" element={ <User /> } />
                <Route path="/" element={ <App /> } />
            </Routes>
    </BrowserRouter>

 */