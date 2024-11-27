import React from "react";
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Link1 from "./components/Link1/Link1";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
// import Users from "./components/Users/Users";
import "./App.css";

//import SwaggerUI from 'swagger-ui'
//import 'swagger-ui/dist/swagger-ui.css';
//
//const spec = require('./swagger-config.yaml');
//
//const ui = SwaggerUI({
//  spec,
//  dom_id: '#swagger',
//});
//
//ui.initOAuth({
//  appName: "Swagger UI Webpack Demo",
//  clientId: 'implicit'
//});

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
            <Link1 />
            <Main name="Буквы" />
            <Main name="Не буквы"/>
            <Main name="Снова буквы"/>
            <Footer />
    </div>
    </>
  );
}

export default App;
