import jsonPlacerHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {

    const response = await jsonPlacerHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS',payload: response.data });

};


