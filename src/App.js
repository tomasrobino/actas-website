import './App.css';

import "./fonts/PlusJakartaSans-VariableFont_wght.ttf"

import Body from './Body';
import Header from './Header';

import { useState } from "react";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return (
        <div id="home">
            <Header windowWidth={windowWidth}/>
            <Body windowWidth={windowWidth}/>
            <a
                href="https://wa.me/393389216223"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp_float"
            >
                <img src="whatsapp.svg" alt="" id="whatsapp-icon"></img>
            </a>
        </div>
    );
}

export default App;
