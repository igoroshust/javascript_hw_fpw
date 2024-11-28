import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Link1 from "./components/Link1/Link1";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
// import Home from "./components/Home/Home";
// import Users from "./components/Users/Users";
import "./styles/App.css";

/*
// Swagger
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  clientId: 'implicit'
});
*/

function App() {

    const state = useState()

  return (
  <>
    <div className="App">
         <Header />
        <div className="content">
            <ClassCounter />
            <PostItem post={ {id: 1, title: 'JavaScript', body: 'Description'} } />
            <PostItem post={ {id: 2, title: 'Python', body: 'Description-1'} } />
            <PostItem post={ {id: 3, title: 'Ruby', body: 'Description-2'} } />
        </div>
    </div>
    </>
  );
}

export default App;

/* Список компонентов для импорта
         <nav>
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
            <Link1 />
            <Main name="Буквы" />
            <Main name="Не буквы"/>
            <Main name="Снова буквы"/>
            <Footer />
*/
