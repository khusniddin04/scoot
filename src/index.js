import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import CareersPage from './pages/CareersPage';

const myRouter = createBrowserRouter([{
  path: "/", 
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    },
    {
      path:"/location",
      element:<LocationPage/>
    },
    {
      path:"/careers",
      element:<CareersPage/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);


