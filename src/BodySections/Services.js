import { useState } from "react";

import ServicesDiv from "./ServicesDiv";

function Services() {
    const [text, setText] = useState(0);

    if (text === 1) {
        return (
            <div>
                <ServicesDiv setText={setText} text={text}/>    
                <div>
                    <p>Este texto es de cuando se apreta "investigacion"</p>
                </div>
            </div>
        )
    } else if (text === 2) {
        return (
            <div>
                <ServicesDiv setText={setText} text={text}/>
                <p>Este texto es de cuando  se apreta "pedido"</p>
            </div>
        )
    } else {
        return (
            <div>
                <ServicesDiv text={text} setText={setText} />
            </div>
        )
    }
}

export default Services;