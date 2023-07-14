import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image_Placeholder from '../assets/Image_Placeholder.png'
import {ThemeProvider} from '@mui/material';
import { theme } from '../Style/Theming';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify'
import { jobsAplication } from '../services/http/job.service';


function JobCards({jobTittle, descripcion, id }) {

    const { mutate } = useMutation({
            mutationKey: 'confirmOtp',
            mutationFn: jobsAplication,
            onSuccess: (data) => {
                console.log("khe?: ")
                console.log(data)
                toast.dismiss();
                toast.success("Your application for this job was successfully submitted",{position: toast.POSITION.BOTTOM_LEFT})
            },
            onMutate: () => {
                toast.loading("Please wait...",{position: toast.POSITION.BOTTOM_LEFT})
            },
            onError: (error) => {
                toast.dismiss();
                toast.error(error.response.data.message,{position: toast.POSITION.BOTTOM_LEFT})
            }
        });

    const applyToJob = () => mutate(id)

    return (
        <ThemeProvider theme={theme}>
        <Card 
            sx={{ height: '10rem', width: '80rem'}}
        >
            <Box 
                display='flex'
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
            >
                <img src = {Image_Placeholder} alt='logo' sizes='20%'/>
                <CardContent sx={{width: '70%'}}>
                    <Typography variant="h5" component="div">
                        {jobTittle}
                    </Typography>
                    <Typography variant="body2" sx={{mt: 1}}>
                        {descripcion}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" size="small" onClick={()=>applyToJob()}>Apply</Button>
                </CardActions>
            </Box>
        </Card>
        </ThemeProvider>
    );
}

export default JobCards;
