import * as React from 'react';
import JobCards from '../../components/JobCards';
import { Box, Grid } from '@mui/material';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { jobsList } from '../../services/http/job.service';
import cookiesStorage from '../../services/cookies/index'
import { useNavigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient();

function Jobs() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div> 
        <Box 
          sx={{my: '12vh', ml: '30vh'}}
          minHeight="100%"
          width="75%"
          >
          <Grid container  rowSpacing={{ md: 1}}  columns={1}>
            <Todos />
          </Grid>
        </Box>
        <ToastContainer autoClose={8000}/>
      </div>
    </QueryClientProvider>
  )
}



function Todos() {
  const navigate = useNavigate();
  if(cookiesStorage.get('token') === undefined)
    navigate('/hirejobs');

  // Queries
  const query = useQuery('jobs', jobsList)

  return (
    <div>
      {query?.data?.jobPositions.map(job => (
        <Grid item xs={4} md={3} marginY={2}>
          < JobCards jobTittle={job.name} descripcion={job.description} id={job.id}/> 
        </Grid>
        ))}
    </div>
  )
}


export default Jobs;
