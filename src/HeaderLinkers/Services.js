import { useState } from "react";

function Services(props) {
    const [text, setText] = useState(0);

    function handleClick(e) {
        if (e.target.className.includes("service1")) {
            setText(1);
        } else if (e.target.className.includes("service2")) {
            setText(2);
        }
    }

    if (text === 1) {
        return (
            <div className="services">
                <h1>Servicios</h1>
    
                <div className="serviceDiv">
                    <div onClick={handleClick} className="service1 serviceElement">
                        <img src="pedido.svg" alt="" className="service1 serviceImg"/>
                        <h3 className="service1">Solicitud de actas italianas</h3>
                    </div>
                    <div onClick={handleClick} className="service2serviceElement">
                        <img src="genealogia.svg" alt="" className="service2 serviceImg"/>
                        <h3 className="service2">Investigación genealógica</h3>
                    </div>
                </div>
    
                <div>
                    <p>Este texto es de cuando  se apreta "pedido"</p>
                </div>
            </div>
        )
    } else if (text === 2) {
        return (
            <div className="services">
                <h1>Servicios</h1>
    
                <div className="serviceDiv">
                    <div onClick={handleClick} className="service1 serviceElement">
                        <img src="pedido.svg" alt="" className="service1 serviceImg"/>
                        <h3 className="service1">Solicitud de actas italianas</h3>
                    </div>
                    <div onClick={handleClick} className="service2serviceElement">
                        <img src="genealogia.svg" alt="" className="service2 serviceImg"/>
                        <h3 className="service2">Investigación genealógica</h3>
                    </div>
                </div>
    
                <div>
                    <p>Este texto es de cuando se apreta "investigacio"</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="services">
                <h1 id="services">Servicios</h1>
    
                <div className="serviceDiv">
                    <div onClick={handleClick} className="service1 serviceElement">
                        <img src="pedido.svg" alt="" className="service1 serviceImg"/>
                        <h3 className="service1">Solicitud de actas italianas</h3>
                    </div>
                    <div onClick={handleClick} className="service2serviceElement">
                        <img src="genealogia.svg" alt="" className="service2 serviceImg"/>
                        <h3 className="service2">Investigación genealógica</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;