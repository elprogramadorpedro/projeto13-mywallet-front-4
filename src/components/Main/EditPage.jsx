import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';

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
    margin-bottom: 40px;
`

const WelcomeLabel = styled.h1`
    font-size: 26px;
    font-weight: 700;
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    gap:13px;
`

const Content = styled.div`
    flex: 1 1 auto;
    overflow-y: scroll;
    border-radius: 5px;
`

const Input = styled.input`
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    padding-left: 15px;

    &::placeholder {}

    &:disabled,
    &[disabled]{}
`

const SubmitButton = styled.button`
    width: 100%;
    height: 46px;
    background-color: var(--purple-light);
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
`

const Bottom = styled.div`
    width: 100%;
    flex: 0 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
`


const WrapButtons = styled.div`
    width: 100%;
    flex: 0 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
`

const TypeButton = styled.div`
    background-color: var(--purple-light);
    width: 100%;
    height: 58px;
    padding: 10px;
    border-radius: 5px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon {
        --ionicon-stroke-width: 32px;
        font-size: 32px;
    }
`


export default function EditPage({}) {
    return (
        <Container>
            <Header>
                <WelcomeLabel>Nova transação</WelcomeLabel>
            </Header>
            <Content>
                <InputsContainer>
                    <WrapButtons>
                        <TypeButton>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </TypeButton>
                        <TypeButton>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                        </TypeButton>
                    </WrapButtons>
                    <Input type="number" placeholder="Valor"/>
                    <Input placeholder="Descrição"/>
                    <SubmitButton>Salvar</SubmitButton>
                </InputsContainer>
            </Content>
        </Container>
    )
}