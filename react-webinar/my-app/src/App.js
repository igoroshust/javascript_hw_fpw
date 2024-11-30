import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyButton from "./components/UI/Button/MyButton";
import MyModal from "./components/UI/Modal/MyModal";
import Loader from "./components/UI/Loader/Loader";
import PostService from "./API/PostService";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
// import { Link } from 'react-router-dom';
// import Main from "./components/Main/Main";
// import Link1 from "./components/Link1/Link1";
// import Counter from "./components/Counter/Counter";
// import ClassCounter from "./components/Counter/ClassCounter";
// import PostItem from "./components/PostItem/PostItem";
// import MySelect from "./components/UI/Select/MySelect";
// import MyInput from "./components/UI/Input/MyInput";
// import Home from "./components/Home/Home";
// import Users from "./components/Users/Users";

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
    const [posts, setPosts] = useState([])

    /* Создаём Loader */
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    /* Объект с постами */
    const [post, setPost] = useState({title: '', body: ''});

    /* Состояние видимости модального окна создания поста (для динамического управления) */
    const [modal, setModal] = useState(false);

    /* Состояние селекта */
    const [filter, setFilter] = useState({sort: '', query: ''})

    /* Отсортированный и отфильтрованный список */
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    /* Подгружаем посты при первичной загрузки странцы */
    useEffect(() => {
        fetchPosts()
    }, []) // массив зависимостей пустой, чтобы функция отработала лишь единожды

   /* Создание поста. Вход - новый созданный пост из PostForm. Затем изменяем состояние */
   const createPost = (newPost) => {
        setPosts([...posts, newPost]) // разворачиваем старый массив, в конец добавляя новый пост
        setModal(false) // скрываем модальное окно после создания поста
   }

   /* Функция отправления запроса на сервер, получение данных и помещение их в состояние с постами */
   async function fetchPosts() {
        setIsPostsLoading(true) // перед отправкой запроса активируем Loader
        const posts = await PostService.getAll(); // getAll() возвращает список постов
        setPosts(posts); // получаем 100 постов
        setIsPostsLoading(false) // после получения постов убираем loader

//       console.log(response); // ответ
//        console.log(response.data);  // массив постов
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
                <button onClick={fetchPosts}>
                    GET POSTS
                </button>
                <MyButton onClick={() => setModal(true)}>
                    Создать пост
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost} />
                </MyModal> <br />
                <hr style={{ margin: '15px 0' }} />

                {/* Сортировка постов. В onChange передаём то, что приходит из самого селекта  */}
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                /> <br />

                {isPostsLoading
                        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
                        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"} />
                 } <br />
            </div>
            <Footer />
        </div>
  );
}

export default App;

/* Список компонентов для импорта
                       <ClassCounter /> <br />
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

/*
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description-1'},
        {id: 3, title: 'CSS', body: 'Description-2'},
        {id: 4, title: 'Python', body: 'Description-3'},
        {id: 5, title: 'Ruby', body: 'Description-4'},
        {id: 6, title: 'PHP', body: 'Description-5'}

*/