import React from 'react';

const NoMatch = () => {
    const errorStyle = {
        textAlign: 'center',
        fontSize:'70px',
        color:'red'
    }
    return (
        <div style={errorStyle}>
            <h1>404!!! <br/> Not Found</h1>
        </div>
    );
};

export default NoMatch;