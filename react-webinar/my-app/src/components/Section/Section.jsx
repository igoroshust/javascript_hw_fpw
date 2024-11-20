import React from "react";

const Section = () => {

    const [count, setCount] = React.useState(0);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={() => minus()}>-</button>
        </div>
    );
}

export default Section;