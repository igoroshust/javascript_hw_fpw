import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {

    const params = useParams() // получаем ID поста

    /* Создаём состояние, куда помещаем ответ от сервера (пост по ID)*/
    const [post, setPost] = useState({});

    /* Отправка запросов */
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id) // получаем ответ от сервера
        setPost(response.data) // помещаем data в состояние
    })

    /* На первую отрисовку компонента получаем данные с сервера */
    useEffect(() => {
        fetchPostById(params.id) // функция, которую возвращает хук
    })

    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
        </div>
    );

}

export default PostIdPage;