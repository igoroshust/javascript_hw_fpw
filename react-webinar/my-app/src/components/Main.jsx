import React from "react";
import "./Main.module.css";
// import Label from "./Label";

const Main = (props) => {
    return (
    <main className="main">
        <label>{ props.name }</label>
        <input />
    </main>
    );
}

export default Main;