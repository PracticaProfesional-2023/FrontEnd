import * as React from 'react';
import { Card, Box, ThemeProvider, TextField, Button } from '@mui/material';
import { theme } from '../../Style/Theming';
import Logo from '../../assets/Logo-bckBlue.png';
//import { Link } from 'react-router-dom';
/*
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';*/
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

//const queryClient = new QueryClient();
axios.defaults.baseURL = 'https://helpful-woolens-elk.cyclic.app';


const Login = ({setter}) => {
    const { handleSubmit, control } = useForm();
    const navigate = useNavigate();

    const sendOtp = async (data) => {
        axios.post('/auth/send-candidate-otp', 
            data)
        .then(function (response) {
            console.log(response);
            setter(response.data.preview_url);
            navigate('/hirejobs/login/confirmation_code');
        })
        .catch(function (error) {
            console.log(error);
        });
    };

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
                        <Controller
                        name={"email"}
                        control={control}
                        defaultValue={""}
                        render={({ field: { onChange, value } }) => (
                            <TextField onChange={onChange} value={value} label={"email"}
                                variant="outlined" 
                                inputProps={{style: {fontSize: 12}}} InputLabelProps={{style: {fontSize: 18}}} 
                                sx={{width: "50%", height: "25%"}} />
                        )} />
                        <Button variant="contained" color="primary"
                            onClick={handleSubmit(sendOtp)}
                            >Login</Button>                     
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

