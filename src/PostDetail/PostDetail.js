import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    

    const {postId} = useParams();
    const [post,setPost] = useState([]);
    const [comments,setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>response.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data =>setComments(data))
    }, [])
    return (
        <div>
            <h1>Title : {post.title}</h1>
            <h3>Body : {post.body}</h3>
            
            <Comments comments={comments}></Comments>
        </div>
    );
};

export default PostDetail;