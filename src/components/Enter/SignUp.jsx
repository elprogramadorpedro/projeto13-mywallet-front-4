import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Enter from './Enter';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    align-items: center;
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    gap:13px;
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
`


const Clickable = styled.div`
    margin-top: 32px;
    a {
        font-size: 15px;
        font-weight: 700;
    }
`



export default function SignUp({}) {
    
    return (
        <Enter>
            <Container>
                <InputsContainer>
                    <Input placeholder="Nome"/>
                    <Input placeholder="E-mail" value="dasdasd"/>
                    <Input type="password" placeholder="Senha"/>
                    <Input type="password" placeholder="Confirme a senha" value="dasdasd"/>
                    <SubmitButton>Cadastrar</SubmitButton>
                </InputsContainer>
                <Clickable>
                    <Link to={"/"} >Já tem uma conta? Entre agora!</Link>
                </Clickable>
            </Container>
        </Enter>
    )
}
