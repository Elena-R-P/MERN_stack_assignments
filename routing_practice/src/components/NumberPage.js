import React, {useState} from 'react';

const NumberPage = (props) => {
    return (
        <div>
            {
            isNaN(props.something)? 
            <h1>The word is: {props.something}</h1>:
            <h1>The number is: {props.something}</h1>
        }
        </div>
    );
};

export default NumberPage;