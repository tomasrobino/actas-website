import { Typography } from "@mui/material";

import ServiceCard from "./ServiceCard";

function ServicesDivWide(props) {
    function handleClick(event) {
        if (event.target.className.includes("service1")) {
            if (props.text!==1) {
                props.setText(1);
            } else {
                props.setText(0);
            }
        } else if (event.target.className.includes("service2")) {
            if (props.text!==2) {
                props.setText(2);
            } else {
                props.setText(0);
            }
        }
    }

    return (
        <div className="bodyHeader">
            <Typography
                id="services"
                fontSize={30}
                marginBottom={5}
            >Servicios</Typography>
            <div className="serviceDiv">
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
            </div>
        </div>
    )
}

export default ServicesDivWide;