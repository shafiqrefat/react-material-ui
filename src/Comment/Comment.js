import React from 'react';
import {ListItem, Avatar, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";

const Comment = (props) => {
    const {name,email,body} = props.comment;
    const commentStyle = {
        border: '1px solid gray',
        borderRadius: '15px',
        margin:'10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'lightcyan'
    }
    return (
        <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={`https://randomuser.me/api/portraits/men/75.jpg`} alt="" />
            </ListItemAvatar>
            <ListItemText style={commentStyle}
                primary={
                    <>
                        <Typography component="p" variant="body2" color="textPrimary">
                            <h3>Name : {name}</h3>
                        </Typography>
                        <Typography component="p" variant="body2" color="textPrimary">
                            <h3>Email : {email}</h3>
                        </Typography>
                        <Typography component="p" variant="body2" color="textPrimary">
                        <h3>Body : {body}</h3>
                        </Typography>
                    </>
                }
            ></ListItemText>
        </ListItem>
    </>
    );
};

export default Comment;