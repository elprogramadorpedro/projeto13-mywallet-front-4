import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';

const EnterScreen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 24px;
`

const InputsComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    * {
        font-weight: 400;
        font-size: 20px;
    }
`

export default function Enter({ children }) {
    return (
        <EnterScreen>
            <Logo>MyWallet</Logo>
            <InputsComponent>
                {children}
            </InputsComponent>
        </EnterScreen>
    )
}