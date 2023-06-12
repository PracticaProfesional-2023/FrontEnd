import * as React from 'react';
import { Card, Box, ThemeProvider, Alert, TextField, Button, Avatar } from '@mui/material';
import { theme } from '../../Style/Theming';
import { useState } from 'react';
import axios from 'axios';

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

    const callRegisterApi = () => {
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
            })  
            .catch(error => {
                setError(true);
                setShowMessage(true);
                setMessage(error.response.data.message)
                console.error('There was an error!', error);
            });
        // };
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
                    <TextField id="first-name" label="First Name" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={firstName} onChange={event => setFirstName(event.target.value)}/>
                    <TextField id="last-name" label="Last Name" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={lastName} onChange={event => setLastName(event.target.value)}/>
                    <TextField id="id" label="Personal ID" variant="outlined"
                        inputProps={{style: {fontSize: 12, backgroundColor: "white", borderRadius: 5}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={doc} onChange={event => setDoc(event.target.value)}/>
                    <TextField id="municipality" label="Municipality" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={municipality} onChange={event => setMunicipality(event.target.value)}/>
                    <TextField id="email" label="Email" variant="outlined" 
                        inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                        sx={{width: "50%", height: "25%"}} value={email} onChange={event => setEmail(event.target.value)}/>
                    {showMessage ? <Alert severity={error ? "error" : "success"}>{message}</Alert> : null}
                    <Button variant="contained" color="primary" onClick={callRegisterApi}>Register</Button>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Register