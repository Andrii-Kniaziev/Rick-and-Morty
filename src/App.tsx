import React from 'react';
import './styles/App.css';
import CharacterList from "./components/CharacterList";

function App() {
    return (
        <div className="App">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                 className="App-logo"
                 alt="logo"
            />
            <CharacterList/>
        </div>
    );
}

export default App;
