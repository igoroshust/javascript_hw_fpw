import React from "react";
import { Link } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";
// import Home from "./components/Home/Home";
// import Users from "./components/Users/Users";
import "./App.css";

function App() {
  return (
  <>
    <div className="App">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
            <Header />
            <Section />
            <Main name="Буквы" />
            <Main name="Не буквы"/>
            <Main name="Снова буквы"/>
            <Footer />
    </div>
    </>
  );
}

export default App;
