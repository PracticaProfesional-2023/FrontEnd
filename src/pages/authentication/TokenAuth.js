import React, { useRef, createRef, useState, useEffect } from 'react';
import { Card, Box, ThemeProvider, Button, Typography } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FormInputOtpText from '../../components/FormInputOtpText';
import { ToastContainer, toast } from 'react-toastify'
import LinkedToast from '../../components/LinkedToast';
import { useNavigate } from 'react-router-dom';
import cookiesStorage from '../../services/cookies/index'
import { obtainUser } from '../../services/http/auth.service';
import { useMutation } from 'react-query';


const Token = () => {
    const url = cookiesStorage.get('url')

    const { mutate } = useMutation({
        mutationKey: 'confirmOtp',
        mutationFn: obtainUser,
        onSuccess: (data) => {
            toast.dismiss();
            cookiesStorage.set('token', data.access_token);
            cookiesStorage.delete('email')
            cookiesStorage.delete('url')
            navigate('/hirejobs/jobs');
        },
        onMutate: () => {
            toast.loading("Please wait...",{position: toast.POSITION.BOTTOM_LEFT})
        },
        onError: (error) => {
            toast.dismiss();
            toast.error(error.response.data.message,{position: toast.POSITION.BOTTOM_LEFT})
        }
    });

    const inputRefs = useRef([
        createRef(),
        createRef(),
        createRef(),
        createRef(),
        createRef(),
        createRef()
    ])
    const navigate = useNavigate();
    const { handleSubmit, control, getValues } = useForm();
    const [err, setErr ]= useState(false);
    const [errMessage, setErrMessage ]= useState(""); 
    var dontDoTwice = false;

    useEffect(() => {
    const handleKeyPress = (index) => (event) => {
        if (event.target.value.length === 1 && index <5) {
            if (index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].current.focus();
            } else {
            inputRefs.current[0].current.focus();
            }
        } else if (event.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].current.focus();
        }
    };


        const eventListeners = inputRefs.current.map((ref, index) => {
            const inputElement = ref.current;
            if (inputElement) {
                const eventListener = handleKeyPress(index);
                inputElement.addEventListener('input', eventListener);
                return () => {
                inputElement.removeEventListener('input', eventListener);
                };
            }
            return undefined;   
            }).filter(listener => listener !== undefined);

            return () => {
            eventListeners.forEach(removeEventListener => removeEventListener());
        };
    }, [inputRefs]);

    const resendCode = () => toast.info(LinkedToast(url),{position: toast.POSITION.BOTTOM_LEFT});

    React.useEffect(() => {
        if(dontDoTwice){
            if(url === undefined)
                toast.error("An error has ocurred. To see the link to your otp click resend code", {position: toast.POSITION.BOTTOM_LEFT})
            else{
                toast.info(LinkedToast(url),{position: toast.POSITION.BOTTOM_LEFT});
            }
        }
        else{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            dontDoTwice = true;
        }
    }, [url]);

    const LoginWithOTP = (data) => {
        var otpcode = getValues("OtpChar1") + getValues("OtpChar2") + getValues("OtpChar3") +
                    getValues("OtpChar4") + getValues("OtpChar5") + getValues("OtpChar6")
        setErr(false)
        setErrMessage("")
        if(getValues("OtpChar1") === "" ||
            getValues("OtpChar2") === "" ||
            getValues("OtpChar3") === "" ||
            getValues("OtpChar4") === "" ||
            getValues("OtpChar5") === "" ||
            getValues("OtpChar6") === ""){
            setErr(true);
            setErrMessage("Please don't leave empty fields")
        }
        else
            mutate(otpcode)
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
                            <FormInputOtpText ref={inputRefs.current[0]}  name={"OtpChar1"} control={control} err={err}/>
                            <FormInputOtpText ref={inputRefs.current[1]}  name={"OtpChar2"} control={control} err={err}/>
                            <FormInputOtpText ref={inputRefs.current[2]}  name={"OtpChar3"} control={control} err={err}/>
                            <FormInputOtpText ref={inputRefs.current[3]}  name={"OtpChar4"} control={control} err={err}/>
                            <FormInputOtpText ref={inputRefs.current[4]}  name={"OtpChar5"} control={control} err={err}/>
                            <FormInputOtpText ref={inputRefs.current[5]}  name={"OtpChar6"} control={control} err={err}/>
                        </Box>
                        <Box display="flex"
                            justifyContent="space-between"
                            flexDirection= 'column'
                            width= "90%"
                            >
                            {err ? (<Typography color="error" variant="h7" gutterBottom >
                                        {errMessage}
                                    </Typography>): (<></>)}
                            <Link style={{cursor:'auto'}}>
                                <Typography style={{cursor:'pointer'}} onClick={resendCode}variant="h7" gutterBottom >
                                    Resend code
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
                <ToastContainer autoClose={8000}/>
            </Box>
        </ThemeProvider>
    );
}

export default Token



