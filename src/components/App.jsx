import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import axios from 'axios';

import SignIn from './Enter/SignIn';
import SignUp from './Enter/SignUp';
import Main from './Main/Main';


export default function App() {

    return (
        <UserContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/wallet" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
