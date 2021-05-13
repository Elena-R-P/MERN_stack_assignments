import React from 'react';

const ColorsPage = (props) => {
    return (
        <div>
            {
            isNaN(props.something)? 
            <h1 style={{backgroundColor: props.color1, color: props.color2}}>The word is: {props.something}</h1>:
            <h1>The number is: {props.something}</h1>
        }
        </div>
    );
};

export default ColorsPage;