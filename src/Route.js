import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import LiveScore from "./components/LiveScore";

const AppRoute=()=>{
    let Routes = useRoutes([
        {
            path:'/',
            element: <Home />,
            children: {
                path: '/#home/live',
                element: <LiveScore />
            }
        },
        {
            path:'/live',
            element: <LiveScore />
        }
    ])
    return Routes
}

export default AppRoute