import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';


import Transaction from './Transaction';




const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    height: 100%;
    text-align: center;
`


const Content = styled.div`
    padding: 10px;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    
    font-size: 16px;
    font-weight: 400;

`

const TransactionsList = styled.div`

    padding-top: 20px;

    width: 100%;
    border-top: 10px;
    flex: 1 1 auto;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 25px;
`


const Bottom = styled.div`
    width: 100%;
    margin-top: 10px;
    flex: 0 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: baseline;

`
const Label = styled.div`
    font-weight: 700;
    color: black;
`

const Total = styled.div`
    color: var(--green);
`



// --------

const transactions = [1, 1, 1, 1, 1, 1];

export default function Transactions({}) {

    const empty = <Empty>Não há registros de<br/>entrada ou saída</Empty>;

    const transactionsView = (
        <Content>
            <TransactionsList>
                {transactions.map(t => <Transaction />)}
            </TransactionsList>
            <Bottom>
                <Label>SALDO</Label>
                <Total>405,93</Total>
            </Bottom>
        </Content>
    );

    return (
        transactions.length > 0 ? transactionsView : empty
    )
}