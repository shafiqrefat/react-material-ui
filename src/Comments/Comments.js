import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {commentId} = useParams()
    const [comments,setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(response => response.json())
        .then(data =>setComments(data))
    }, [])
    return (
        <div>
            <h3> Name : {comments.name}</h3>
            <h4> Emails : {comments.email}</h4>
            <h5> Body : {comments.body}</h5>
        </div>
    );
};

export default Comments;