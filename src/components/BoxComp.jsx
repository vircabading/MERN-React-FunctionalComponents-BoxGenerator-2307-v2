import React from 'react';
import '../App.css';

///////////////////////////////////////////////////
//  Box Component
///////////////////////////////////////////////////

const BoxComp = (props) => {

    const boxStyle = {
        backgroundColor: props.color,
        width: '50px',
        height: '50px'
    }

    return (
        <div style={boxStyle} className='round' >{props.color}</div>
    )
}

export default BoxComp;