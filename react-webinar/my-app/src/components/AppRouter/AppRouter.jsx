import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from "../../pages/Posts";
import Login from "../../pages/Login";
import { publicRoutes, privateRoutes } from "../../router/routes";
import { AuthContext } from "../../context/context";


const AppRouter = () => {

    const {isAuth} = useContext(AuthContext); // храним информацию, авторизован пользователь, или нет.

    return (
              isAuth ?
              <Routes>
                    {privateRoutes.map(route =>
                        <Route
                             element={<route.component />}
                             path={route.path}
                             exact={route.exact}
                         />
                    )}
                <Route path="*" element={<Posts />} />
               </Routes>
               :
               <Routes>
                    {publicRoutes.map(route =>
                        <Route
                             element={<route.component />}
                             path={route.path}
                             exact={route.exact}
                         />
                    )}
                    <Route path="*" element={<Login />} />
               </Routes>
    );
};

export default AppRouter;