import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        }
    }
})

function Header() {
    return (
        <div style={{ position: "relative", display: "inline" }}>
            <Typography
                fontSize={80}
                color="white"
                id="origine"
            >
                Origine.
            </Typography>
            <div id="underHeader">
                <img src="florence_duomo.jpg" alt="" id="florence"></img>
            </div>
            <div id="header">
                <ThemeProvider theme={theme}>
                    <Button href="#home"
                        sx={{ fontSize: "20px" }}
                    >Inicio</Button>
                    <Button href="#services"
                        sx={{ fontSize: "20px" }}
                    >Servicios</Button>
                    <Button href="#FAQs" className="headerElement"
                        sx={{ fontSize: "20px" }}
                    >FAQs</Button>
                    <Button href="#contactUs" className="headerElement"
                        sx={{ fontSize: "20px" }}
                    >Contactanos</Button>
                    <Button href="#payment" className="headerElement"
                        sx={{ fontSize: "20px" }}
                    >Pagos</Button>
                    <Button href="#about" className="headerElement"
                        sx={{ fontSize: "20px" }}
                    >Sobre nosotros</Button>
                </ThemeProvider>
            </div>
            <div id="diffuse"></div>
        </div>
    )
}

export default Header;