import { TextField, Button } from "@mui/material";
import { useState } from "react";

function Contact() {
    const [error, setError] = useState(false);

    function handleClick() {
    }

    return (
        <div>
            <h1 id="contact us">Contactanos</h1>
            <div id="contactForm">
                <h3>Mandanos un e-mail!</h3>
                <TextField
                    label="Dirección de e-mail"
                    type="email"
                    autoComplete="off"
                    className="formField"
                />
                <TextField
                    label="Asunto"
                    type="email"
                    autoComplete="off"
                    className="formField"
                />
                <TextField
                    label="Mensaje"
                    type="text"
                    autoComplete="off"
                    className="formField"
                />
                <Button
                    variant="contained"
                    onClick={handleClick}
                >
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default Contact;