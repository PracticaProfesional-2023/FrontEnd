import * as React from 'react';
import { Card, Box, ThemeProvider, Alert, TextField, Button, Avatar } from '@mui/material';
import { theme } from '../../Style/Theming';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://helpful-woolens-elk.cyclic.app";


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [doc, setDoc] = useState('');
    const [municipality, setMunicipality] = useState('');


    const [showMessage, setShowMessage] = useState(false); 
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [buttonLabel, setButtonLabel] = useState("Register");

    const navigate = useNavigate();

    const callRegisterApi = () => {
        // Verificamos el estado del botón
        if (buttonLabel != "Register") {
            console.log("navegar al login");
            navigate("/hirejobs/login", {replace: true});
            return;
        }

        // Validamos el ingreso de datos
        if (email == "" || firstName == "" || lastName == "" || doc == "" || municipality == "") {
            setError(true);
            setShowMessage(true);
            setMessage("Debe completar todos los datos requeridos");
            return;
        }

        const registerData = {
            email: email,
            names: firstName,
            lastNames: lastName,
            document: doc,
            municipality: Number(municipality)
        }
    
        setError(false);
        setShowMessage(false);
        // const sendRegister = aync ()=> {
            axios.post(baseUrl + "/auth/signup-candidate", registerData)
            .then(response => {
                setError(false)
                setShowMessage(true)
                setMessage("Usuario registrado con éxito!")
                setButtonLabel("Go to Login");
            })  
            .catch(error => {
                setError(true);
                setShowMessage(true);
                setMessage(error.response.data.message)
                console.error('There was an error!', error);
            });
        // };
    }

    function checkDui(text) {
        let resp = true;
        var cont = 0;
        for (let i = 0; i < text.length; i++) {
            if ((text[i] < '0' || text[i] > '9') && text[i] != '-') {
                resp = false;
                break;
            } else {
                if (text[i] === '-') {
                    if (cont > 0) {
                        resp = false;
                        break;
                    } else {
                        if (i != 8) {
                            resp = false;
                            break;
                        }
                    }
                    cont++;
                } else {
                    if (i == 8) {
                        resp = false;
                        break;
                    }
                }
            }
        }
        if (resp) {
            if (text.length > 10) {
                resp = false;
            }
        }
        return resp;
    }

    function handleChange(event) {
        if(checkDui(event.target.value) ) {
            console.log('Valido');
            setDoc(event.target.value);
        } else {
            console.log('No Valido');
            event.target.value = doc;
        }
    }

    function validateDuiInput(event) {
        var resp = false;
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            console.log("Caracter valido");
            resp = true;
        } else {
            console.log("Caracter invalido");
        }
        return resp;
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="115vh"
                >
                <Card
                    backgroundcolor="secondary"
                    sx={{ 
                        minHeight: '90vh', 
                        minWidth: '90vh', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: 'none'
                        }}
                    style={{background: "#e0e0e0"}}
                    >
                    <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: '15vh', height: '15vh' }}/>
                    <TextField id="first-name" label="First Name" variant="outlined" disabled={buttonLabel != "Register"}
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={firstName} onChange={event => setFirstName(event.target.value)}/>
                    <TextField id="last-name" label="Last Name" variant="outlined" disabled={buttonLabel != "Register"}
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={lastName} onChange={event => setLastName(event.target.value)}/>
                    <TextField id="id" label="Personal ID" variant="outlined" disabled={buttonLabel != "Register"}
                        inputProps={{style: {fontSize: 12, backgroundColor: "white", borderRadius: 5}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={doc} onChange={event => handleChange(event)} />
                    <TextField id="municipality" label="Municipality" variant="outlined" disabled={buttonLabel != "Register"}
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={municipality} onChange={event => setMunicipality(event.target.value)}/>
                    <TextField id="email" label="Email" variant="outlined" disabled={buttonLabel != "Register"}
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={email} onChange={event => setEmail(event.target.value)}/>
                    {showMessage ? <Alert severity={error ? "error" : "success"}>{message}</Alert> : null}
                    <Button variant="contained" color="primary" onClick={callRegisterApi}>{buttonLabel}</Button>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Register