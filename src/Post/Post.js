import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { userId, id, title, body} = props.post;
    const postStyle = { 
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'orange',
    }
    return (
        <div style={postStyle}>
            <h1>User Id : {userId}</h1>
            <h2>Post Id : {id}</h2>
            <h3> Post : {title}</h3>
            <h5> Body : {body}</h5>
            <button><Link to={`/post/${id}`}>See More</Link></button>
        </div>
    );
};

export default Post;