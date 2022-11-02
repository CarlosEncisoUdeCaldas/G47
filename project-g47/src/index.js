import ReactDOM from 'react-dom/client'
import IndexApp from './IndexApp';
import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider } 
from 'react-router-dom'
import React from 'react';
import Saludo from './components/Saludo/Saludo';
import Contador from './components/Contador/Contador';
import Home from './Home';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path='/' element={ <IndexApp/> }>
            <Route index element={ <Home /> } />,
            <Route path='/contador' element={ <Contador/> } />,
            <Route path='/saludo' element={ <Saludo/> } />,
        </Route>
    ])
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        <RouterProvider router = { router } />
    </React.StrictMode>
);