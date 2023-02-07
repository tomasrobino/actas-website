import { Typography } from "@mui/material";

function SearchService() {
    return (
        <div className="textServiceDiv">
            <Typography fontSize={25} marginBottom={3}>Solicitud de Actas</Typography>
            <Typography align="justify">
                Este servicio es para el envío físico por correo de actas
                italianas de las que se tengan todos los datos (Comuna, Año, Número, Nombre).
                <br/>El servicio tiene un costo de a partir de €90 dependiendo de las
                características particulares del caso.
                El envío es por medio de Correo Argentino, si desea otro método,
                por favor háganoslo saber.
                Por favor contáctese con nosotros por el medio que prefiera para
                poder informarnos de los detalles.
            </Typography>
        </div>
    )
}

export default SearchService;