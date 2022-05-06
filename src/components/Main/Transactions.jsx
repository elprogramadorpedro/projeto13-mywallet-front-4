import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import WalletContext from '../../contexts/WalletContext';

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

    padding: 20px 10px;

    width: 100%;
    border-top: 10px;
    flex: 1 1 auto;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 25px;
`


const Bottom = styled.div`
    width: 100%;
    padding: 10px;
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
    color: var(--${props => props.value > 0 ? 'green' : 'red'});
`



// --------


export default function Transactions({}) {

    const {transactions} = useContext(WalletContext);

    const empty = <Empty>Não há registros de<br/>entrada ou saída</Empty>;

    function calculaSaldo () {
        let soma = 0;
        transactions.forEach(t => {
            if (t.type === 'credit') {soma += t.value}
            else {soma -= t.value}
        })
        return soma;
    }

    function writeValue(value) {
        let decimals = value % 1;
        let inteiros = (value - decimals).toString();
        let inteirosLabel = "";
        for (let i = 1; i <= inteiros.length; i++) {
            if ((i-1) % 3 === 0 && i>1) {inteirosLabel = "." + inteirosLabel}
            inteirosLabel = inteiros[inteiros.length - i] + inteirosLabel;
        }
        let dec2 = Math.round(decimals*100)
        return inteirosLabel + "," + (dec2 < 10 ? "0" : "") + dec2;
    }

    const saldo = calculaSaldo();
    const transactionsView = (
        <Content>
            <TransactionsList>
                {transactions.map((t, index) => <Transaction key={index} transaction={t}/>)}
            </TransactionsList>
            <Bottom>
                <Label>SALDO</Label>
                <Total value={saldo}>{writeValue(Math.abs(saldo))}</Total>
            </Bottom>
        </Content>
    );

    return (
        transactions.length > 0 ? transactionsView : empty
    )
}