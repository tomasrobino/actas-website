import Services from "./BodySections/Services";
import Payment from "./BodySections/Payment";
import FAQs from "./BodySections/FAQs";
import Contact from "./BodySections/Contact";
import About from "./BodySections/About";

function Body() {
    return(
        <div className="body">
            <Services/>
            <FAQs/>
            <Payment/>
            <Contact/>
            <About/>
        </div>
    )
}

export default Body;