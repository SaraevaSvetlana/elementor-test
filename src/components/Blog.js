import React from 'react';
import {CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {setLike} from "../store/action";
import {StyledCard, StyledCardActions} from "../styles/StyledBlog";


const Blog = ({title, content, like,index}) => {
    const {isLogged} = useSelector(state=> state);
    const dispatch = useDispatch();
    return (
        <Grid item xs={12} md={4}>
            <StyledCard sx={{minWidth: 275}} >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <StyledCardActions >
                    {isLogged? <Button
                        size="small"
                     onClick={()=>dispatch(setLike(index))}
                    >Like</Button>:""}
                    <Typography  color="text.secondary">
                        Likes : {like}
                    </Typography>
                </StyledCardActions>


            </StyledCard>
        </Grid>
    );
};

export default Blog;