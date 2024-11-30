import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1) { // указываем параметры для ответа
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        }) // возвращаем список постов
        return response;
    }
}