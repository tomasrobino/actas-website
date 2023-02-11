import { Typography } from "@mui/material";

function GenService(props) {
    return (
        <div className={props.genWidth}>
            <Typography fontSize={25} marginBottom={3}>Investigación Genealógica</Typography>
            <Typography align="justify">
                Este servicio es para aquellos que deseen obtener
                algún acta italiana  del registro civil (posterior a 1866) o de bautismo
                (anterior a 1866) pero que no posean todos los datos de la misma,
                por ejemplo:
            </Typography>
            <ul>
                <li>Conoce la fecha exacta, la provincia, pero no la Comuna.</li>
                <li>Conoce una fecha aproximada, y la región.</li>
                <li>Conoce una fecha aproximada, pero pueden ser uno o mas lugares.</li>
                <li>Conoce una fecha aproximada y un lugar aproximado.</li>
                <li>Etcétera.</li>
            </ul>
            <Typography align="justify">
                Nuestro personal especializado realizará una exhaustiva investigación genealógica
                para obtener esos datos faltantes y poder dar con el acta.
                <br/>La contratación de la búsqueda no garantiza que podamos encontrarla,
                debido a que puede ser que esta ya no exista por diferentes motivos
                ajenos al servicio, especialmente si es anterior a 1866.
                <br/>
                <br/>En caso de necesitar el acta física, puede utilizar nuestro servicio
                de Solicitud de Actas.
                <br/>
                <br/>Este servicio tiene un costo de €130.
                Para contratar este servicio deberá abonar €20 por adelantado para
                que podamos iniciar la investigación
                Por favor contáctese con nosotros por el medio que prefiera para
                poder informarnos de los detalles.
            </Typography>
        </div>
    )
}

export default GenService;