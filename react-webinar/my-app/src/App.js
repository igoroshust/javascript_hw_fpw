import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Link1 from "./components/Link1/Link1";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
import PostList from "./components/PostList/PostList";
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

    /* Состояние с массивом постов */
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description-1'},
        {id: 3, title: 'CSS', body: 'Description-2'}
    ])

    const [posts1, setPosts1] = useState([
        {id: 4, title: 'Python', body: 'Description-3'},
        {id: 5, title: 'PHP', body: 'Description-4'},
        {id: 6, title: 'Ruby', body: 'Description-5'}
    ])

    /* Массив обычных объектов необходимо преобразовать в массив React-элементов (с помощью map) */
  return (
        <div className="App">
           <Header />
            <div className="content">
                <ClassCounter /> <br />
                <PostList posts={posts} title={"Посты про Frontend"} /> <br />
                <PostList posts={posts1} title={"Посты про Backend"} /> <br />
            </div>
            <Footer />
        </div>
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
