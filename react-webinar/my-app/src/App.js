import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Section />
        <Main name="Буквы" />
        <Main name="Не буквы"/>
        <Main name="Снова буквы"/>
        <Footer />
    </div>
  );
}

export default App;
