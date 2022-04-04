import {SET_IS_LOGGED, SET_LIKE, SET_PAGES, SET_POSTS} from "./action";

export const initialState = {
    posts: [],
    isLogged: true,
    numberOfPages:0
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOGGED:
            return {...state, isLogged: !state.isLogged};
        case SET_POSTS:
            return {...state, posts: action.payload};
        case SET_LIKE:
            const list = [...state.posts];
            list[action.payload].like = list[action.payload].like * (-1) + 1;
            return {...state, posts: list};
        case SET_PAGES:
            return {...state, numberOfPages: action.payload};
        default:
            return state;
    }
}
