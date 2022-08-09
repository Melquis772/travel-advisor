import React from "react";
import { Typography, Box, AppBar } from "@material-ui/core";

import useStyles from './styles';


const Footer = () => {

    const classes = useStyles()

    return (
        <>
            <AppBar position="static" >
                <Box display="flex" justifyContent="center" alignItems="center" className={classes.footer}>
                    <Typography variant="h9">&copy; 2022 Melquisedec Sepulveda</Typography>
                </Box>
            </AppBar>

        </>

    )
}

export default Footer