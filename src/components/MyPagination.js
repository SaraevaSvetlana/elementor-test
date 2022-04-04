import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {StyledAppBar, StyledToolbar} from "../styles/StyledBlog";

const MyPagination = ({page, setPage}) => {
    const numberOfPages = useSelector(state => state.numberOfPages);

    function handlePagination(flag) {
        console.log(numberOfPages);
        if (page === 1 && flag || page ===numberOfPages && !flag) return
       flag? setPage(page-1) : setPage(page+1);
    }

    return (

            <Box >
                <StyledAppBar >
                    <StyledToolbar>
                        <Button
                            color="inherit"
                            onClick={()=> handlePagination(true)}
                        >
                            Prevoius
                        </Button>
                        <Button
                            color="inherit"
                            onClick={()=> handlePagination(false)}
                        >
                            Next
                        </Button>
                    </StyledToolbar>
                </StyledAppBar>
            </Box>


    );
};

export default MyPagination;