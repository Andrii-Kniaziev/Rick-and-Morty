import React from 'react';
import './styles/App.css';
import Input from "./components/UI/Input/Input";
import {IoIosSearch} from "react-icons/io";

function App() {
    return (
        <div className="App">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                 className="App-logo"
                 alt="logo"
            />
            <Input icon={IoIosSearch} placeholder="Filter by name"/>
        </div>
    );
}

export default App;
