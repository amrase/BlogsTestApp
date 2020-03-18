import React,{useReducer} from 'react'
import createDataContext from './createDataContext'
const BlogContext = React.createContext()


const blogReducer = (state,action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state,{title: `BlogPost #${state.length + 1}`}]
        case 'edit_blogpost':
            return state
        case 'update_blogpost':
            return state
        case 'delete_blogpost':
            return state       
        default:
            return state;
    }
}


const addBlogPost = (dispatch) =>{
    return () =>{
        dispatch({type: 'add_blogpost'})
    }
}

export default {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost},
    []
)