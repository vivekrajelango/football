import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const AppRoute=()=>{
    let Routes = useRoutes([
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/home',
            element: <Home />
        },
        {
            path:'/about',
            element: <About />
        },
        {
            path:'/services',
            element: <Services />
        },
        {
            path:'/contact',
            element: <Contact />
        }
    ])
    return Routes
}

export default AppRoute