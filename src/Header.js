import Home from "./HeaderLinkers/Home"

function Header() {
    return (
        <div className="header">
            <Home/>
            <a href="#services" className="headerElement">Servicios</a>
            <a href="#pagos" className="headerElement">Pagos</a>
            <a href="#FAQs" className="headerElement">FAQs</a>
            <a href="#contact us" className="headerElement">Contactanos</a>
            <a href="#about" className="headerElement">Sobre nosotros</a>
        </div>
    )
}

export default Header;