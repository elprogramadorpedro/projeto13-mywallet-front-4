import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
    cursor: pointer;
`;

const Date = styled.div`
    flex: 0 0 auto;
    color: var(--gray-superlight);
    text-align: left;
    wdith: 48px;
`;

const Center = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const Delete = styled.div`
    flex: 0 0 auto;
    color: var(--gray-superlight);
    text-align: right;
    width: 10px;
`;

const Description = styled.div`
    flex: 1 1 auto;
    text-align: left;
    color: black;
`;

const Value = styled.div`
    flex: 0 0 auto;
    color: var(--green);
`;


export default function Transaction({}) {

    return (
        <Container>
            <Date>01/23</Date>
            <Center>
                <Description>Alo alo dona carminha</Description>
                <Value>29.30</Value>
            </Center>
            <Delete>x</Delete>
        </Container>
    )
}