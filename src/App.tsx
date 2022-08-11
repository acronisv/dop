import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

type getType = {
    "userId": number,
    "id": number,
    "title": string
}

function App() {

    const [get, setGet] = useState<Array<getType>>([])

    const getRequestHandler = () => {
        setGet([])
    }

    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => setGet(json))},[])

    return (
        <div className="App">
            <header className="App-header">
                <Button nickName={"Get request"} callback={getRequestHandler}/>
                <ul>{get.map((el)=>{
                    return (
                            <li>
                                <span>UserId: {el.userId} </span>
                                <span>{el.id} </span>
                                <span>{el.title}</span>
                            </li>
                    )
                })}</ul>
            </header>
        </div>
    );
}

export default App;
