import React from 'react';

const Comment = (props) => {
    const {comment} = props;
    const commentStyle = {
        border: '1px solid gray',
        borderRadius: '15px',
        margin:'10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'lightcyan'
    }
    return (
        <div style={commentStyle}>
            <h3>Name : {comment.name}</h3>
            <h4>Email : {comment.email}</h4>
            <h5>Body : {comment.body}</h5>
        </div>
    );
};

export default Comment;