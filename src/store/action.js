const maxNumberBlogsOfPage = 12;
export const  SET_IS_LOGGED ='SET_IS_LOGGED';
export const SET_POSTS = 'SET_POSTS';
export const SET_LIKE = 'SET_LIKE';
export const SET_PAGES = 'SET_PAGES';

export const setIsLogged = () => (
    {
        type: SET_IS_LOGGED
    }
);
export const setLike = (index) => (
    {
        type: SET_LIKE,
        payload: index
    }
);
export const setPosts = (posts) => (
    {
        type: SET_POSTS,
        payload: posts
    }
);
export const setNumberOfPages = (pages) => (
    {
        type: SET_PAGES,
        payload: pages
    }
);
export const getChangeBlogsPage = (pageBlogs, setHasMore )=> {
    return (dispatch) => {
        fetch("/data.json").then(response => response.json())
            .then(data => {
                let a =Math.ceil(data.length/12);
                dispatch(setNumberOfPages(a));
               const list = data.slice((pageBlogs-1)*maxNumberBlogsOfPage, pageBlogs*maxNumberBlogsOfPage);
                dispatch(setPosts(list))

            })
            .catch(e => {
                console.log(e);
            });

    }
}
