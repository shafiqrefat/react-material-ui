import React from 'react';
import Comment from '../Comment/Comment';

const Comments = (props) => {
    const {comments} = props;

    return (
        <div>
            {
                comments.map(comment =><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;