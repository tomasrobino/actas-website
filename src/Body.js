import Services from "./HeaderLinkers/Services";
import Payment from "./HeaderLinkers/Payment";
import FAQs from "./HeaderLinkers/FAQs";
import Contact from "./HeaderLinkers/Contact";
import About from "./HeaderLinkers/About";

function Body() {
    return(
        <div className="body">
            <Services/>
            <Payment/>
            <FAQs/>
            <Contact/>
            <About/>
        </div>
    )
}

export default Body;