import './App.css';

import "./fonts/PlusJakartaSans-VariableFont_wght.ttf"

import Body from './Body';
import Header from './Header';

import { useState } from "react";
import Overlays from './Overlays';

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
            <Overlays/>
        </div>
    );
}

export default App;
