import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function ServicesDiv(props) {
    function handleClick(event) {
        if (event.target.className.includes("service1")) {
            props.setText(1);
        } else if (event.target.className.includes("service2")) {
            props.setText(2);
        }
    }

    return (
        <div className="services">
            <h1 id="services">Servicios</h1>

            <div className="serviceDiv">
                <Card onClick={handleClick} className="service1 serviceElement" sx={{ maxWidth: 300, backgroundColor: "rgb(255,255,255,0.1)" }}>
                    <CardActionArea  className="service1">
                        <CardMedia
                            component="img"
                            sx={{ height: 200, objectFit: "contain", marginTop: "20px"}}
                            image="genealogia.svg"
                            className="service1"
                        />
                        <CardContent className="service1">
                            <Typography gutterBottom variant="h5" component="div" className="service1">
                                Investigación genealógica
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="service1">
                                Utiliza nuestro servicio de investigación genealógica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card onClick={handleClick} className="service2 serviceElement" sx={{ maxWidth: 300, backgroundColor: "rgb(255,255,255,0.1)" }}>
                    <CardActionArea className="service2">
                        <CardMedia
                            component="img"
                            sx={{ height: 200, objectFit: "contain", marginTop: "20px"}}
                            image="pedido.svg"
                            className="service2"
                        />
                        <CardContent className="service2">
                            <Typography gutterBottom variant="h5" component="div" className="service2">
                            Solicitud de actas italianas
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="service2">
                                Utiliza nuestro servicio de investigación solicitud de actas
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}

export default ServicesDiv;