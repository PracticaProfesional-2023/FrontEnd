import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login = ({setter}) => {
    const { handleSubmit, control, getValues } = useForm();
    const navigate = useNavigate();
    const [err, setErr ]= React.useState(false);
    const [errMessage, setErrMessage ]= React.useState(""); 
    var flag = false;

    const fecthOtp= () =>{

    }

    const sendOtp = async (data) => {
        if(!flag){
            flag = true;
            setErr(false)
            setErrMessage("")
            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
            const email =  getValues("email")
            if(email === ""){
                setErr(true)
                setErrMessage("no pueden haber campos vacios")
                flag = false;
            }
            else if(regex.test(email)){
                const id = toast.loading("Please wait...",{position: toast.POSITION.BOTTOM_LEFT})
                axios.post('/auth/send-candidate-otp', 
                    data)
                .then(function (response) {
                    toast.update(id, {render: "Sending OTP", type: "succes", isLoading: false, delay: 150, autoClose: true });
                    flag = false;
                    console.log(response);
                    setter(response.data.preview_url);
                    navigate('/hirejobs/login/confirmation_code');
                })
                .catch(function (error) {
                    flag = false;
                    var errMessage = ""
                    if(error.response.status === 500)
                        errMessage = "500 - Something happend. Please try later"
                    else if(error.response.status === 403)
                        errMessage = "403 - Error, your petition couldn't be prosesed"
                    toast.update(id, {render: errMessage, type: "error", isLoading: false, delay: 150, autoClose: true });
                });
            }
            else{
                flag = false;
                setErr(true)
                setErrMessage("patron invalido")
            }
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                >
                <Card
                    backgroundcolor="secondary"
                    sx={{ 
                        minHeight: '70vh', 
                        minWidth: '90vh', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: 'none'
                    }}
                    style={{background: "#e0e0e0"}}
                    >
                    <img src = {Logo} alt='logo' width="30%"/>
                    <Controller
                        name={"email"}
                        control={control}
                        defaultValue={""}
                        render={({ field: { onChange, value } }) => (
                        <TextField error={err} helperText={errMessage} onChange={onChange} value={value} label={"email"}
                            variant="outlined" 
                            inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                            sx={{width: "50%", height: "25%"}} />
                    )} />
                    <Button variant="contained" color="primary"
                        onClick={handleSubmit(sendOtp)}
                        >Login</Button>                     
                </Card>
                <ToastContainer autoClose={8000}/>
            </Box>
        </ThemeProvider>
    );
}


export default Login

