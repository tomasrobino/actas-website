import Contact from "./HeaderLinkers/Contact"
import FAQ from "./HeaderLinkers/FAQ"
import Home from "./HeaderLinkers/Home"
import Payment from "./HeaderLinkers/Payment"
import Services from "./HeaderLinkers/Services"

function Header() {
    return (
        <div className="header">
            <Home/>
            <Services/>
            <FAQ/>
            <Payment/>
            <Contact/>
        </div>
    )
}

export default Header;