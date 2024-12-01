import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostIdPage from "../../pages/PostIdPage";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";

const AppRouter = () => {
    return (
              <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route exact path="/posts" element={<Posts />} />
                    <Route exact path="/posts/:id" element={<PostIdPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
               </Routes>
    );
};

export default AppRouter;