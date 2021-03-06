import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => setPosts(data));
    }, [])
    const totalPostStyle = {
        textAlign: 'center',
        backgroundColor:'gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    return (
        <div>
        <h1 style={totalPostStyle}>Total Post: {posts.length}</h1>
        {
          posts.map(post => <Post post={post}></Post>)
        }
        </div>
    );
};

export default Home;