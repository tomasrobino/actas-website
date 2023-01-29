import { useState } from "react";
import ServicesDivThin from "./ServicesDivThin";
import ServicesDivWide from "./ServicesDivWide";


function Services() {
    const [text, setText] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log(windowWidth.current);

    function handleResize() {
        setWindowWidth(window.innerWidth);
        console.log(windowWidth);
    }

    window.addEventListener("resize", handleResize);

    if (windowWidth > 800) {
        if (text === 1) {
            return (
                <div className="serviceSection">
                    <ServicesDivWide setText={setText} text={text}/>
                    <p>Este texto es de cuando se apreta "investigacion"</p>
                </div>
            )
        } else if (text === 2) {
            return (
                <div className="serviceSection">
                    <ServicesDivWide setText={setText} text={text}/>
                    <p>Este texto es de cuando  se apreta "pedido"</p>
                </div>
            )
        } else {
            return (
                <div className="serviceSection">
                    <ServicesDivWide text={text} setText={setText} />
                </div>
            )
        }
    } else {
        if (text === 1) {
            return (
                <div className="serviceSection">
                    <ServicesDivThin
                        setText={setText}
                        text={text}
                        shownText={"Este texto es de cuando se apreta investigación"}
                    />
                </div>
            )
        } else if (text === 2) {
            return (
                <div className="serviceSection">
                    <ServicesDivThin setText={setText} text={text}/>
                    <p>Este texto es de cuando  se apreta "pedido"</p>
                </div>
            )
        } else {
            return (
                <div className="serviceSection">
                    <ServicesDivThin text={text} setText={setText} />
                </div>
            )
        }
    }
}

export default Services;