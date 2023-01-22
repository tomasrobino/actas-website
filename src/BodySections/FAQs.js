import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function FAQs() {
    return (
        <div id="faqsDiv">
            <h1 id="FAQs">FAQs</h1>
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