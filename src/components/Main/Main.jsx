import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';

import EditPage from './EditPage';
import Wallet from './Wallet';

export default function Main({}) {

    const [isEditing, setIsEditing] = useState(false);

    return (
        (isEditing ? <EditPage/> : <Wallet />)
    )
}