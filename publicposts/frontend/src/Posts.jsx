import React, {Component} from "react";
import PostService from "./PostService"; /* Интерфейс запросов и ответов для сервера */

const postService = new PostService();

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], /* подгрузка постов */
            inputValue: '' /* хранение выведенного поста */
        }

        this.handleChange = this.handleChange.bind(this); /* изменение поля ввода */
        this.handleChange = this.handleSubmit.bind(this); /* нажатие на клавишу подтверждения отправки поста */
    }

    /* Обработчик события (измение поля ввода) */
    handleChange(event) {
        this.setState({inputValue: event.target.value}); /* если поле ввода меняется, присваеваем его inputValue */
    }

    /* Обработчик события (отправка поста) */
    handleSubmit(event) {
        postService.createPost({'text': this.state.inputValue}); /* По нажатию подтверждения отправляем inputValue в createPost() */
        this.getData() /* Подгружаем посты заного */
        this.setState({inputValue : ''}) /* Ставим поле ввода пустым */
    }


    /* Получение данных с сервера и обработка события подключения компонента */
    getData() {
        postService.getPosts().then(result => {
            this.setState({data: result.data})
        })
    }

    /* Выполняем функцию при загрузке компонента */
    componentDidMount(){
        this.getData()
    }

    /* Функция для лайка */
    setLike(post) {
        postService.setLikePost(post.id) /* Говорим серверу, что лайк поставлен (ответ не ждём) */
        post.likeCount += 1 /* Добавляем лайк */
        this.forceUpdate() /* Рисуем интерфейс снова функцией forceUpdate */
    }

    render() {
        return (
            <div id="posts">
                {this.state.data.map(post =>
                    <div id={'post_' + post.id}>
                        <p>{post.text}</p>
                        <button onClick={() => this.setLike(post)}>{ post.likeCount }</button>
                        <p>Date: {post.dat}</p>
                        <hr />
                    </div>
        )}
        <input type='text' onChange={this.handleChange} value={this.state.inputValue}></input>
        <button onClick={this.handleSubmit}>Send</button>
        </div>
    )
    }
}