import {useMemo} from "react";

// хук сортировки
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) { // если строка не пустая
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) // возвращаем отсортированный массив
        }
        return posts; // обычный массив постов
    }, [sort, posts]) // callback(возвращ. результат вычислений) и массив зависимостей (deps). callback вызывается, если хоть одна из зависимостей поменяет значение

    return sortedPosts;
}

// хук возвращает отфильтрованный и отсортированный массив
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort); // массив отсортированных постов

    /* Поиск (на основании отсортированного массива) */
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]) // в массив зависимостей попадает поисковая строка и отсортированный массив

    return sortedAndSearchedPosts;
}