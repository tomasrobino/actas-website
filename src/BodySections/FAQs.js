import { Typography } from "@mui/material";

import Question from "../Question";
import data from "../FAQsData";

function FAQs() {
    const arr=[];

    for (const i in data) {
        arr.push(<Question question={data[i].question} answer={data[i].answer}/>);
    }
    return (
        <div className="bodyHeader">
            <Typography
                id="FAQs"
                fontSize={30}
                marginBottom={5}
            >Preguntas Frecuentes</Typography>
            {arr}
        </div>
        
    )
}

export default FAQs;