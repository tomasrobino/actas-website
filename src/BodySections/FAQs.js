import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function FAQs() {
    return (
        <div className="bodyHeader">
            <Typography
                id="FAQs"
                fontSize={30}
                marginBottom={5}
            >FAQs</Typography>
            <Accordion className="accordion" sx={{ backgroundColor: "rgb(255, 255, 255, 0.1)" }}>
                <AccordionSummary>
                    <Typography>Pregunta 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        htbfybdrthtdhdsreg
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" sx={{ backgroundColor: "rgb(255, 255, 255, 0.1)" }}>
                <AccordionSummary>
                    <Typography>Pregunta 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        skhngblsfdghfjn.guiñs
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        
    )
}

export default FAQs;