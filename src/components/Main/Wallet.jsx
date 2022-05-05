import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';

import Transactions from './Transactions';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    flex: 0 0 auto;

    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    align-items: flex-start;
`

const WelcomeLabel = styled.h1`
    font-size: 26px;
    font-weight: 700;
`


const Content = styled.div`
    flex: 1 1 auto;
    background-color: white;
    overflow-y: scroll;
    border-radius: 5px;
`

const Bottom = styled.div`
    width: 100%;
    flex: 0 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
`

const NewButton = styled.div`
    background-color: var(--purple-light);
    width: 100%;
    height: 115px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 17px;

    ion-icon {
        --ionicon-stroke-width: 32px;
        font-size: 24px;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`


export default function Wallet({}) {
    return (
        <Container>
            <Header>
                <WelcomeLabel>Olá, Estevam</WelcomeLabel>
                <ion-icon size="large" name="log-out-outline"></ion-icon>
            </Header>
            <Content>
                <Transactions/>
            </Content>
            <Bottom>
                <NewButton>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <div>Nova<br/>entrada</div>
                </NewButton>
                <NewButton>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <div>Nova<br/>saída</div>
                </NewButton>
            </Bottom>
        </Container>
    )
}