import * as React from 'react';
import { Card, Box, ThemeProvider, Button, Typography } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FormInputOtpText from '../../components/FormInputOtpText';
import axios from "axios";
//import { useNavigate } from 'react-router-dom';

const Token = ({setter, otplink}) => {
    const { handleSubmit, control, getValues } = useForm();

    const LoginWithOTP=(data)=>{
        var otpcode = getValues("OtpChar1") + getValues("OtpChar2") + getValues("OtpChar3") +
                    getValues("OtpChar4") + getValues("OtpChar5") + getValues("OtpChar6")
        otpcode = String(otpcode);
        console.log(otpcode)
        axios.post('/auth/signin-candidate', 
            {
                otp: otpcode
            })
        .then(function (response) {
            console.log(response)
            console.log(response.data.access_token)
            setter(response.data.access_token, true)
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                sx={{mt:4}}
                >
                <Card
                    backgroundcolor="secondary"
                    
                    sx={{ 
                        width: '50%', 
                        boxShadow: 'none'
                        }}
                    style={{background: "#e0e0e0"}}
                    >
                    <Box 
                        display= 'flex'
                        flexDirection= 'column'
                        justifyContent= 'space-around'
                        alignItems= 'center'
                        sx={{my:5}}
                        >
                        <img src = {Logo} alt='logo' width="25%"/>
                        <Box display="flex"
                            justifyContent="space-between"
                            width= "90%"
                            sx={{my:1}}>
                            <Typography variant="h6" gutterBottom>
                                Continue with email
                            </Typography>
                            <Link to="/hirejobs/login">
                                <Typography variant="h7" gutterBottom>
                                    Edit email
                            </Typography></Link>
                        </Box>
                        <Box display="flex"
                            justifyContent="start"
                            width= "90%"
                            sx={{my:2}}>
                            <FormInputOtpText  name={"OtpChar1"} control={control} label={"#"} />
                            <FormInputOtpText  name={"OtpChar2"} control={control} label={"#"} />
                            <FormInputOtpText  name={"OtpChar3"} control={control} label={"#"} />
                            <FormInputOtpText  name={"OtpChar4"} control={control} label={"#"} />
                            <FormInputOtpText  name={"OtpChar5"} control={control} label={"#"} />
                            <FormInputOtpText  name={"OtpChar6"} control={control} label={"#"} />
                        </Box>
                        <Box display="flex"
                            justifyContent="space-between"
                            flexDirection= 'column'
                            width= "90%"
                            >
                            <Link to={otplink} target='_blank'>
                                <Typography variant="h7" gutterBottom >
                                    Link to code
                                </Typography>
                            </Link>
                            <Typography variant="h7" gutterBottom sx={{ my: 0.5}} width="50%">
                                <p>By continuing, you agree that we create an acount for you {'('}Unless already created{')'}, 
                                and accept our Terms and Conditions and Privacy Policy</p>
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" 
                        onClick={handleSubmit(LoginWithOTP)}>
                            Continue
                        </Button>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default Token



