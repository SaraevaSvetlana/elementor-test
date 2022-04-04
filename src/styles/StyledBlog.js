import {withStyles} from "@material-ui/styles";
import {Card, CardActions, Grid} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export const StyledGrid = withStyles(() => ({
    root:{
        flexGrow: '1',
        padding: '10px 100px 50px',
        justifyContent: 'center',

    }
}))(Grid)
export const StyledCard = withStyles(() => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '250px',
        maxWidth: '350px',
        margin: '10px',
        alignContent: 'space-between',

    }

}))(Card);

export const StyledCardActions = withStyles(() => ({
    root: {
        justifyContent:  'space-between' ,
    }

}))(CardActions);
export const StyledToolbar = withStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:  'space-between' ,
    }

}))(Toolbar);


export const StyledAppBar = withStyles(() => ({
    root: {
        position: 'static',
        width:'100%',



    }

}))(AppBar);

