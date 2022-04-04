import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {setIsLogged} from "../store/action";


const Menu = () => {
    const {isLogged} = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    <Button
                        color="inherit"
                    onClick={()=>dispatch(setIsLogged())}
                    >
                        {isLogged ? 'Login':'Exit'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Menu;