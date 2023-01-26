import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography } from "@mui/material";

function Contact() {
    //const [error, setError] = useState(false);
    const form = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm("service_i97qpy7", "template_x8oj62j", form.current, "FRJi0b7zeb2ehnXGb").then((result) => {
            //window.location.reload();  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="bodyHeader">
            <Typography
                id="services"
                fontSize={30}
                marginBottom={5}
            >Contactanos</Typography>
            <div>
                <h3>Mandanos un e-mail!</h3>
                <form ref={form} onSubmit={handleSubmit} id="contactForm">
                    <TextField
                        label="Dirección de e-mail"
                        type="email"
                        name="user_email" //For emailjs
                        autoComplete="off"
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <TextField
                        label="Asunto"
                        type="text"
                        name="user_asunto" //For emailjs
                        autoComplete="off"
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <TextField
                        label="Mensaje"
                        type="text"
                        name="message" //For emailjs
                        autoComplete="off"
                        multiline
                        minRows={3}
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >Enviar</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact;