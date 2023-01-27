import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, createTheme, ThemeProvider } from "@mui/material";

function Contact() {
    const form = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm("service_i97qpy7", "template_x8oj62j", form.current, "FRJi0b7zeb2ehnXGb").then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffffff"
            },
            secondary: {
                main: "#000000"
            }
        }
    })

    return (
        <div className="bodyHeader">
            <Typography
                id="contactUs"
                fontSize={30}
                marginBottom={5}
            >Contactanos</Typography>
            <div>
                <form ref={form} onSubmit={handleSubmit} id="contactForm">
                    <TextField
                        label="Dirección de e-mail"
                        variant="filled"
                        type="email"
                        name="user_email" //For emailjs
                        autoComplete="off"
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <TextField
                        label="Asunto"
                        variant="filled"
                        type="text"
                        name="user_asunto" //For emailjs
                        autoComplete="off"
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <TextField
                        label="Mensaje"
                        variant="filled"
                        type="text"
                        name="message" //For emailjs
                        autoComplete="off"
                        multiline
                        minRows={3}
                        className="formField"
                        sx={{ marginBottom: 1}}
                    />
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="secondary"
                        >Enviar</Button>
                    </ThemeProvider>
                </form>
            </div>
        </div>
    )
}

export default Contact;