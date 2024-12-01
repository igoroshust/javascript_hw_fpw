import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";

/*
// Swagger
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});

ui.initOAuth({
  appName: "Swagger UI Webpack Demo",
  clientId: 'implicit'
});
*/

function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;











/* Список компонентов для импорта
         <ClassCounter /> <br />
         <nav>
          <Link to="/home">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
            <Link1 />
            <Main name="Буквы" />
            <Main name="Не буквы"/>
            <Main name="Снова буквы"/>
            <Footer />
*/

/*
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'HTML', body: 'Description-1'},
        {id: 3, title: 'CSS', body: 'Description-2'},
        {id: 4, title: 'Python', body: 'Description-3'},
        {id: 5, title: 'Ruby', body: 'Description-4'},
        {id: 6, title: 'PHP', body: 'Description-5'}

*/