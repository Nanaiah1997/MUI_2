import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme)=>{
     return{
        main_box:{
            width:"20%",
            backgroundColor:theme.palette.background.bg_2,
            color: "black",
            marginTop: "0",
            minHeight: "600px"
        }
     }
})