import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = (props) => {
    const classes = useStyles();
    const { userId, id, title, body} = props.post;
    const postStyle = { 
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'gray',
        textAlign: 'center'
    }
    const buttonStyle = {
        fontWeight: 'bold',
        margin:'auto'
    }
    

    return (

        <Card className={classes.root} style={postStyle}>

            <CardContent>
                <Typography className={classes.pos} color="textPrimary">
                    <h1>User Id : {userId}</h1>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                <h2>Post Id : {id}</h2>
                </Typography>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <h3> Post : {title}</h3>
                </Typography>
                <Typography variant="body2" component="p">
                    <h4> Body : {body}</h4>
                </Typography>
            </CardContent>

            <CardActions>
                <Button color="secondary" variant="contained" style={buttonStyle}>
                    <Link to={`/post/${id}`} style={{color:'white'}}>See More</Link>
                </Button>
            </CardActions>

      </Card>
    );
};

export default Post;