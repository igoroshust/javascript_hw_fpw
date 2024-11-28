import React, { useState } from "react";

// Компонент - это функция, возвращающая JSX.

const Section = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Текст в инпуте')


    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div>
                <h1>{count}</h1>
                <h2>{value}</h2>
                <input
                    type="text"
                    value={value}
                    /* функция, отслеживающая изменения в инпуте (слушатель onChange). Cb для событий первым параметром
                    принимают event, поле target - это сам DOM-элемент, value - значение, которое в нём находится.
                    Мы можем доставать это значение и помещаеть его в состояние, это двустороннее связывание. */
                    onChange={event => setValue(event.target.value)}
                    /* теперь это управляемые компоненты, т.к. мы всегда можем изменить значение, изменив состояние */
                />
                <button onClick={plus}>+</button>
                <button onClick={() => minus()}>-</button>
        </div>
    );
}

export default Section;