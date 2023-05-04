import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
{
    return{
        navBar: {
            backgroundColor: theme.palette.background.bg_1,
            "& .Mui-paper": {},// to override default style in mui
          },
    }
}) 