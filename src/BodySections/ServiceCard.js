import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function ServiceCard(props) {
    return (
        <Card onClick={props.handleClick} className="service1 serviceElement" sx={{ maxWidth: 300, backgroundColor: "rgb(255,255,255,0.2)", boxShadow: 6}} variant="outlined">
            <CardActionArea  className={props.class}>
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: "contain", marginTop: "20px"}}
                    image={props.image}
                    className={props.class}
                />
                <CardContent className={props.class}>
                    <Typography gutterBottom variant="h5" component="div" className={props.class}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={props.class}>
                        {props.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ServiceCard;