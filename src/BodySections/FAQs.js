import { Typography } from "@mui/material";

import Question from "../Question";

function FAQs() {
    return (
        <div className="bodyHeader">
            <Typography
                id="FAQs"
                fontSize={30}
                marginBottom={5}
            >Preguntas Frecuentes</Typography>
            <Question question={"pregunta 1"} answer={"respuesta 1"}/>
            <Question question={"pregunta 1"} answer={"respuesta 1"}/>
        </div>
        
    )
}

export default FAQs;