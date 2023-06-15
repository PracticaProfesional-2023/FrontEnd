import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { login } from '../../services/http/auth.service'
import cookiesStorage from '../../services/cookies/index'

const Login = () => {
    const { mutate } = useMutation({
        mutationKey: 'sendOtp',
        mutationFn: login,
        onSuccess: (data) => {
            toast.dismiss();
            toast.success(data.message,{position: toast.POSITION.BOTTOM_LEFT})
            
            cookiesStorage.set('url', data.preview_url)

            navigate('/hirejobs/login/confirmation_code');
        },
        onMutate: () => {
            toast.loading("Please wait...",{position: toast.POSITION.BOTTOM_LEFT})
        },
        onError: (error) => {
            toast.dismiss();
            toast.error(error.response.data.message,{position: toast.POSITION.BOTTOM_LEFT})
        }
    });
    const { handleSubmit, control} = useForm({
        defaultValues: {
            email: "",
        }
    });

    const navigate = useNavigate();

    const sendOtp = (data) => {
        cookiesStorage.set('email', data )
        mutate(data)
    }

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
                    <img src = {Logo} alt='logo' width="35%"/>
                        <form onSubmit={handleSubmit(sendOtp)}>
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between'>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error },  }) => (
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    type="email"
                                    sx={{width: '50vh'}}
                                />
                                )}
                                rules={{
                                    required: 'Email required',
                                    pattern: {
                                        value: /^[\w.-]+@[\w.-]+\.\w+$/,
                                        message: 'Invalid email address'
                                    }
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained" color="primary"
                                onClick={handleSubmit(sendOtp)}
                                sx={{mt: 3}}
                            >
                                Login
                            </Button> 
                            </Box> 
                        </form>
                </Card>
                <ToastContainer autoClose={8000}/>
            </Box>
        </ThemeProvider>
    );
}


export default Login

