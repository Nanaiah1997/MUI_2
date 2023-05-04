import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './sideBar.style'

const SideBar = () => {

     const styles = useStyles();

     const [age, setAge] = React.useState('');

     const handleChange = (event) => {
       setAge(event.target.value);
     };
  return (
    <Box  className={styles.main_box}>
        
            <Typography variant='h6' color="white" pt="40px" pl="18px" fontSize="smaller">Explore</Typography>

    <Box>
        <Typography variant='h6' color="white" pt="40px" pl="18px" fontSize="smaller"> Explore All</Typography>

        <Box mt="5px">
        <Typography variant='h6' color="white" pt="5px" pl="18px" fontSize="smaller"> Learn</Typography>
        <Typography variant='h6' color="white" pt="5px" pl="18px" fontSize="smaller"> Applied</Typography>
        <Typography variant='h6' color="white" pt="5px" pl="18px" fontSize="smaller"> coding</Typography>

        </Box>
    </Box>
      
        
    </Box>

  )
}

export default SideBar