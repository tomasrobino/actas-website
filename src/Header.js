import { useState } from "react";
import { Button, createTheme, IconButton, List, SwipeableDrawer, ThemeProvider, Typography, ListItem, ListItemButton, ListItemText, Box, Divider } from "@mui/material";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        }
    }
})

function Header(props) {
    const [drawer, setDrawer] = useState(false);


    const toggleDrawer = (newDrawer) => () => {
        setDrawer(newDrawer);
    };

    if (props.windowWidth > 780) {
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
                        >Preguntas Frecuentes</Button>
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
    } else {
        return (
            <div style={{ position: "relative", display: "inline" }}>
                <div id="origineMob">
                    <Typography
                        fontSize={50}
                        color="white"
                        fontWeight={"bold"}
                        
                    >
                        O
                    </Typography>
                    <Typography
                        fontSize={50}
                        color="white"
                        fontStyle={"italic"}
                    >
                        rigine.
                    </Typography>
                </div>
                <div id="underHeader">
                    <img src="florence_duomo_cut_2.jpg" alt="" id="florence"></img>
                </div>
                <IconButton sx={{ background: "white", borderRadius: 2}} marginBottom={5} id="iconDrawer" onClick={toggleDrawer(true)}>
                    <MenuRoundedIcon/>
                </IconButton>
                <Box onClick={toggleDrawer(false)}>
                    <SwipeableDrawer
                        anchor="left"
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <List sx={{ width: "50vw", height: 200}}>
                            {[["Inicio", "#home"], ["Servicios", "#services"], ["FAQs", "#FAQs"], ["Contactanos", "#contactUs"], ["Pagos", "#payment"], ["Sobre nosotros", "#about"]].map(([text, at]) => (
                                <>
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton component="a" href={at}>
                                            <ListItemText primary={text}/>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider/>
                                </>
                            ))}
                        </List>
                    </SwipeableDrawer>
                </Box>
                <div id="diffuseMob"></div>
            </div>
        )
    }
}

export default Header;