import Services from "./BodySections/Services";
import FAQs from "./BodySections/FAQs";
import Contact from "./BodySections/Contact";
import About from "./BodySections/About";
import Payment from "./BodySections/Payment";

function Body() {
    return(
        <div className="body">
            <Services/>
            <FAQs/>
            <Contact/>
            <Payment/>
            <About/>
        </div>
    )
}

export default Body;