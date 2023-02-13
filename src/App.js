import { useState } from "react";

import './App.css';
import Body from './Body';
import Header from './Header';
import Overlays from './Overlays';
import Bottom from "./Bottom";

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
            <Bottom/>
        </div>
    );
}

export default App;
