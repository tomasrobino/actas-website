import GenService from "./GenService";
import SearchService from "./SearchService";
import ServiceCard from "./ServiceCard";

function ServicesDivThin(props) {
    function handleClick(event) {
        if (event.target.className.includes("service1")) {
            if (props.text!==1) {
                props.setText(1);
            } else {
                props.setText(0);
            }
        } else if (event.target.className.includes("service2")) {
            if (props.text===1) {
                props.setText(2);
                window.scrollBy(0, -700);
            } else if (props.text===0) {
                props.setText(2);
            } else {
                props.setText(0);
            }
        }
    }

    if (props.text===1) {
        return (
            <div className="serviceDivCol">
                <ServiceCard
                    title={"Investigación genealógica"}
                    subtitle={"Utiliza nuestro servicio de investigación genealógica"}
                    image={"descarga.jpg"}
                    class={"service1"}
                    handleClick={handleClick}
                />
                <GenService genWidth={"textServiceDivThin"} className="servicesThinElement"/>
                <ServiceCard
                    title={"Solicitud de actas italianas"}
                    subtitle={"Utiliza nuestro servicio de solicitud de actas"}
                    image={"acta.png"}
                    class={"service2"}
                    handleClick={handleClick}
                />
            </div>
        )
    } else if (props.text===2) {
        return (
            <div className="serviceDivCol">
                <ServiceCard 
                    title={"Investigación genealógica"}
                    subtitle={"Utiliza nuestro servicio de investigación genealógica"}
                    image={"descarga.jpg"}
                    class={"service1"}
                    handleClick={handleClick}
                />
                <ServiceCard
                    title={"Solicitud de actas italianas"}
                    subtitle={"Utiliza nuestro servicio de solicitud de actas"}
                    image={"acta.png"}
                    class={"service2"}
                    handleClick={handleClick}
                />
                <SearchService searchWidth={"textServiceDivThin"}/>
            </div>
        )
    } else {
        return (
            <div className="serviceDivCol">
                <ServiceCard
                    title={"Investigación genealógica"}
                    subtitle={"Utiliza nuestro servicio de investigación genealógica"}
                    image={"descarga.jpg"}
                    class={"service1"}
                    handleClick={handleClick}
                    className="servicesThinElement"
                />
                <ServiceCard
                    title={"Solicitud de actas italianas"}
                    subtitle={"Utiliza nuestro servicio de solicitud de actas"}
                    image={"acta.png"}
                    class={"service2"}
                    handleClick={handleClick}
                />
            </div>
        )
    }
}

export default ServicesDivThin;