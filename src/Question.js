import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function Question(props) {
    return (
        <Accordion className="accordion" sx={{ backgroundColor: "rgb(255, 255, 255, 0.1)" }}>
            <AccordionSummary>
                <Typography>{props.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{props.answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Question;