import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import WalletContext from '../../contexts/WalletContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import dayjs from 'dayjs';


import EditPage from './EditPage';
import Wallet from './Wallet';

const LoadingScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
`

export default function Main({}) {

    const {user, token, setUser, setToken} = useContext(UserContext);
    
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);

    useEffect(getAllData, [token])

    const navigate = useNavigate();

    if (!token) {
        navigate("/");
    }

    // API
    async function getAllData() {
        if (token) {
            try {
                if (!user) {
                    console.log('vou caçar user');
                    await getData("http://localhost:5000/users", setUser)}
                if (transactions.length === 0) {
                    console.log('vou caçar transactions');
                    await getData("http://localhost:5000/transactions", setTransactions)}
                setIsLoading(false);
            } catch {
                navigate("/");
            }
        } else {
            navigate("/");
        }
    } 


    async function getData(url, setFunction) {
        const config = { headers: { Authorization: `Bearer ${token}`}};
        try {
            const promise = await axios.get(url, config);
            console.log('downloaded', promise.data);
            setFunction(promise.data);
        } catch {
            navigate("../");
        }
    }

    async function sendNewToAPI(transaction) {
        const url = "http://localhost:5000/transactions";
        const config = { headers: { Authorization: `Bearer ${token}`}};
        const {value, description, type} = transaction;
        const date = dayjs().format("DD/MM");

        console.log(date, type, description, value);

        if (date && type && description && value) {
            try {
                const promise = await axios.post(url, {value, description, type, date},config);
                console.log('saved in api');
                await getData("http://localhost:5000/transactions", setTransactions);
                console.log("refreshed transactions!");
                closeEditPage();
            } catch {
                alert("Não foi possível salvar");
            }
        } else {
            alert("Preencha tudo");
        }
    }

    async function sendEditedToAPI(transaction) {
        const url = `http://localhost:5000/transactions/${transaction.id}`;
        const config = { headers: { Authorization: `Bearer ${token}`}};
        const {value, description, type, date} = transaction;

        console.log(date, type, description, value);

        if (date && type && description && value) {
            try {
                console.log('tentar substituir');
                const promise = await axios.put(url, {value, description, type, date: date.$d},config);
                console.log('deu certo');
                await getData("http://localhost:5000/transactions", setTransactions);
                console.log("refreshed transactions!");
                closeEditPage();
            } catch {
                alert("Não foi possível salvar");
            }
        } else {
            alert("Preencha tudo");
        }
    }

    async function removeTransactionFromAPI(id) {
        const url = `http://localhost:5000/transactions/${id}`;
        const config = { headers: { Authorization: `Bearer ${token}`}};

        if (id) {
            try {
                const promise = await axios.delete(url, config);
                console.log('removed from api');
                await getData("http://localhost:5000/transactions", setTransactions);
                console.log("refreshed transactions!");
                closeEditPage();
            } catch {
                alert("Não foi possível deletar");
            }
        }
    }


    // Context Functions

    function openEditPage (transaction) {
        setEditingTransaction(transaction);
        setIsEditing(true);
    }

    function closeEditPage () {
        setIsEditing(false);
        setEditingTransaction(null);
    }

    function abortEdit () {
        if (window.confirm("Você quer abandonar a edição?")) {
            closeEditPage ()
        }
    }

    function submitTransaction (transaction) {
        console.log('submiting... :', transaction);
        if (transaction.id) {
            console.log('put');
            sendEditedToAPI(transaction);
        } else {
            console.log('post');
            sendNewToAPI(transaction);
        }
    }

    function removeTransaction (id) {
        if (window.confirm("Tem certeza que quer apagar?")) {
            console.log("remove", id);
            removeTransactionFromAPI(id);
        }
    }

    

    // Elements

    const redirectScreen = (<LoadingScreen><Link to={"../"}>Não tem nada aqui :/<br/>Clique para entrar!</Link></LoadingScreen>);
    const loadingScreen = (<LoadingScreen><ThreeDots color="#fff" height={50} width={50} /></LoadingScreen>);
    const screen = isEditing ? <EditPage transaction={editingTransaction}/> : <Wallet/>;
    const mainScreen = isLoading ? loadingScreen : screen;

    return (
        <WalletContext.Provider
            value={
                {
                    transactions, setTransactions,
                    isEditing, setIsEditing, 
                    submitTransaction, removeTransaction, abortEdit, openEditPage
                }
            }
        >
            {token ? mainScreen : redirectScreen}
        </WalletContext.Provider>
    )
}