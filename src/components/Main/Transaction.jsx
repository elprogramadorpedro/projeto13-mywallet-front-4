import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import dayjs from 'dayjs';
import WalletContext from '../../contexts/WalletContext';


const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
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
    cursor: pointer;
`;

const Description = styled.div`
    flex: 1 1 auto;
    text-align: left;
    color: black;
    cursor: pointer;
`;

const Value = styled.div`
    flex: 0 0 auto;
    color: var(--${props => props.type === 'credit' ? 'green' : 'red'});
`;


export default function Transaction({transaction}) {

    const {description, type, value, date, _id} = transaction;
    const {openEditPage, removeTransaction} = useContext(WalletContext);

    return (
        <Container>
            <Date>{dayjs(date.$d).format('DD/MM')}</Date>
            <Center>
                <Description onClick={() => openEditPage(transaction)}>{description}</Description>
                <Value type={type}>{value}</Value>
            </Center>
            <Delete onClick={() => removeTransaction(_id)}>x</Delete>
        </Container>
    )
}