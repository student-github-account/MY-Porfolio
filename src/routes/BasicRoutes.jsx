import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Work from "../pages/work/Work";
import Cv from "../pages/cv/Cv";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact.jsx/Contact";





export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path:"about",
                element:<About></About>,
            },
            {
                path:"blog",
                element:<Blog></Blog>,
            },
            {
                path: "service",
                element:<Service></Service>
            },
            {
                path:"work",
                element:<Work></Work>
            },
            {
                parh:"cv",
                element:<Cv></Cv>
            },
            {
                path:"contact",
                element:<Contact></Contact>
            }
        ]
            
    }
])