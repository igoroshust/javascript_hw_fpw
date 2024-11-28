import React, { useState } from 'react';


/* В классовом представлении нельзя использовать хуки */

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* Создаём состояние с помощью свойства state */
            count: 0 /* Резервируем состояние */
        }

    /* биндим функцию в контекст, чтобы не терялся. Bind позволяет привязать контекст this и начальные аргументы Func. */
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    /* Внутри класса не пишем function */
    plus() {
        this.setState({count: this.state.count + 1}) /* Изменяем состояние */
    }

    minus() {
        this.setState({count: this.state.count - 1}) /* Изменяем состояние */
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1> {/* Внутри класса использует this */}
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default ClassCounter;