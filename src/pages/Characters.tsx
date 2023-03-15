import React from 'react';
import CharacterList from "../components/CharacterList";
import '../styles/App.scss';

const Characters = () => {
    return (
        <div className="App">
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                 className="App-logo"
                 alt="logo"
            />
            <CharacterList/>
        </div>
    );
};

export default Characters;
