import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;