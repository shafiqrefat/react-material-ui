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
                primary= {name}
                secondary={
                    <>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {email}
                        </Typography> <br/>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {body}
                        </Typography>
                    </>
                }
            ></ListItemText>
        </ListItem>
    </>
    );
};

export default Comment;