import { useState } from "react";
import { Typography } from "@mui/material";

import ServicesDivThin from "./Services/ServicesDivThin";
import ServicesDivWide from "./Services/ServicesDivWide";
import GenService from "./Services/GenService";
import SearchService from "./Services/SearchService";

function Services() {
    const [text, setText] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (windowWidth > 800) {
        if (text === 1) {
            return (
                <>
                    <ServicesDivWide setText={setText} text={text}/>
                    <GenService genWidth={"textServiceDiv"}/>
                </>
            )
        } else if (text === 2) {
            return (
                <>
                    <ServicesDivWide setText={setText} text={text}/>
                    <SearchService searchWidth={"textServiceDiv"}/>
                </>
            )
        } else {
            return (
                <ServicesDivWide text={text} setText={setText} />
            )
        }
    } else {
        return (
            <div className="bodyHeader">
                <Typography
                    id="services"
                    fontSize={30}
                    marginBottom={5}
                >Servicios</Typography>
                <ServicesDivThin
                    setText={setText}
                    text={text}
                />
            </div>
        )
    }
}

export default Services;