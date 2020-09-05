import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    

    const {postId} = useParams();
    const [post,setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>response.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h1>Title : {post.title}</h1>
            <h3>Body : {post.body}</h3>
            
            <Comments></Comments>
        </div>
    );
};

export default PostDetail;