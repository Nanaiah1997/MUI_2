
import { Box } from '@mui/material';
import './App.css';
import CouseListing from './component/course/couse-listing';
import ResponsiveAppBar from './component/Navbar/MAinNAv';
import SideBar from './component/sidebar/SideBar';



function App() {

  return (
    <>
    <ResponsiveAppBar/>
    <Box  sx={{width: "100%", bg: "background.bg_2"}} display="flex" flexDirection="row">
        <SideBar/>
        <CouseListing/>
    </Box>
    </>
    
  );
}

export default App;
