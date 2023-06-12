import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
import { Link } from 'react-router-dom';/*
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';*/
import axios from "axios";
import { useForm } from "react-hook-form";

//const queryClient = new QueryClient();
axios.defaults.baseURL = 'https://helpful-woolens-elk.cyclic.app';

const sendOtp = async () => {
    axios.post('/auth/send-candidate-otp', 
        {
            "email": "rodrigo.mejia20162@gmail.com"
        })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

const Login = () => {
    return (
        //<QueryClientProvider client={queryClient}>
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
                        <TextField id="Email" label="Email" variant="outlined" 
                            inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                            sx={{width: "50%", height: "25%"}} />
                        <Link to="/hirejobs/login/confirmation_code" style={{ color: '#FFFFFF' }} >
                            <Button type='submit' variant="contained" color="primary"
                                onClick={() => {
                                    sendOtp();}}>Login</Button>
                        </Link>
                    </Card>
                </Box>
            </ThemeProvider>
        //</QueryClientProvider>
    );
}

/*
function Data(){
    // Create a client
    const queryClient = useQueryClient();

    const {data, status} = useQuery('data', fetchData);

    if (status === 'loading'){
        console.log("cargando")
    }
    if(status === 'error'){
        console.log("Error")
    }

    console.log(data)

}
 */


export default Login

