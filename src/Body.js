import Services from "./BodySections/Services";
import FAQs from "./BodySections/FAQs";
import Contact from "./BodySections/Contact";
import About from "./BodySections/About";
import Payment from "./BodySections/Payment";
import { Typography } from "@mui/material";



function Body(props) {
    let aux = true;

    if (props.windowWidth > 800) {
        aux = 0;
    } else {
        aux = 20;
    }

    return(
        <div className="body">
            <Typography
                marginTop={-4}
                marginBottom={10}
                fontSize={aux}
                fontStyle={"italic"}
                color={"white"}
            >
                Servicios de genealogía italiana
            </Typography>
            <Services/>
            <FAQs/>
            <Contact/>
            <Payment/>
            <About/>
        </div>
    )
}

export default Body;