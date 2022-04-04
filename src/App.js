import './App.css';
import Menu from "./components/Menu";
import Blog from "./components/Blog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getChangeBlogsPage} from "./store/action";
import MyPagination from "./components/MyPagination";
import {StyledGrid} from "./styles/StyledBlog";

function App() {
    const {posts} = useSelector(state => state);
    const [pageBlogs, setPageBlogs] = useState(1);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getChangeBlogsPage(pageBlogs));
    }, [pageBlogs])


    return (
        <>
            <Menu/>

            <StyledGrid container spacing={2} sx={{mt: 10}}>

                {posts.map((item, index) =>
                    <Blog
                        index={index}
                        title={item.title}
                        content={item.content}
                        like={item.like}
                        key={`id#${index}`}
                    />
                )}

            </StyledGrid>

            <MyPagination
                page={pageBlogs}
                setPage={setPageBlogs}
            />


        </>
    );
}

export default App;
