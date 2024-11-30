import { useState } from 'react';

// callback - запрос, перед которым показываем Loader и после выполнения которого Loader скрывается
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);

    // обработка ошибок хуком
    const[error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true) // показываем Loader
            await callback() // вызываем cb, который приняли аргументом
        } catch (e) {
            // здесь обрабатываем случай возникновения ошибки
            setError(e.message); // если ошибка произошла, помещаем в неё текст
        } finally {
            setIsLoading(false) // скрываем loader
        }
    }
    return [fetching, isLoading, error]
}