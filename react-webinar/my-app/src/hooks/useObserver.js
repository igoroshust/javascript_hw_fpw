import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {

    /* Доступ к observer внутри копмонента (получение доступа к DOM-элементу, сохранение данных) */
    const observer = useRef();

    /* Массив зависимостей для Lazy Load. Каждый раз, когда div появляется в зоне видимости, отрабатывает этот callback */
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect() // если observer создан и в current что-то находится, то отключаем наблюдение за всеми элементами
        var cb = function (entries, observer) {
           if(entries[0].isIntersecting && canLoad) {
                callback()
           }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current) // за каким DOM-элементом наблюдаем
    }, [isLoading])

}