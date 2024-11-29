import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Link1 from "./components/Link1/Link1";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
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
        {id: 3, title: 'CSS', body: 'Description-2'},
        {id: 4, title: 'Python', body: 'Description-3'},
        {id: 5, title: 'Ruby', body: 'Description-4'},
        {id: 6, title: 'PHP', body: 'Description-5'}
    ])


    /* Объект с постами */
    const [post, setPost] = useState({title: '', body: ''});


    /* Получение данных из неуправляемого инпута (useRef) */
   // const bodyInputRef = useRef() // с помощью useRef получаем доступ к DOM и забираем value

   /* Создание поста. Вход - новый созданный пост из PostForm. Затем изменяем состояние */
   const createPost = (newPost) => {
        setPosts([...posts, newPost]) // разворачиваем старый массив, в конец добавляя новый пост
   }

   /* Удаление постов. Получаем post из дочернего компонента */
   const removePost = (post) => { // из массива постов необходимо удалить тот, который мы передали аргументом.
   // filter возвращает новый массив по отфильтрованному условию.
        setPosts(posts.filter( p => p.id !== post.id )) // если ID элемента из массива = равен ID переданному нами постом, то удаляем его.
   }

  return (
        <div className="App">
           <Header />
            <div className="content">
                <ClassCounter /> <br />
                <PostForm create={createPost} /> <br />

                {/* Условная отрисовка (посты не найдены) */}
                {posts.length !== 0
                    ? <PostList remove={removePost} posts={posts} title={"Список постов"} />
                    : <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
                }
                <br />
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
