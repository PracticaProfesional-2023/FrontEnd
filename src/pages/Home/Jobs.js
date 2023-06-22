import * as React from 'react';
import JobCards from '../../components/JobCards';
import { Box, Grid } from '@mui/material';

function Jobs() {
  
  return (
      <div> 
        <Box 
          sx={{my: '12vh', ml: '30vh'}}
          minHeight="100%"
          width="70%"
          >
          <Grid container  rowSpacing={{ md: 3}}  columns={1}>
            <Grid item xs={4} md={2} mdOffset="auto" >
              < JobCards jobTittle={"Tittle"} descripcion={"Lorem ipsum dolor sit amet consectetur adipiscing, elit conubia commodo dis nascetur ornare lobortis, feugiat pharetra nisi duis lacus. "}/>
            </Grid>
          </Grid>
        </Box>
      </div>
  )
}

export default Jobs;
