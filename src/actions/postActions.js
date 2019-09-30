import { FETCH_POSTS, NEW_POST } from './actions/types';

export const fetchPosts = () => dispatch => {
    fetch('')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}