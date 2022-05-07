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

    return (
        <Container>
            <Date>{dayjs(date).format("DD/MM")}</Date>
            <Center>
                <Description onClick={() => openEditPage(transaction)}>{description}</Description>
                <Value type={type}>{writeValue(value)}</Value>
            </Center>
            <Delete onClick={() => removeTransaction(_id)}>x</Delete>
        </Container>
    )
}