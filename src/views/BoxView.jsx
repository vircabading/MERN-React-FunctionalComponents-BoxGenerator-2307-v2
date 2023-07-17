import React from 'react';
import '../App.css';

import BoxComp from '../components/BoxComp';

///////////////////////////////////////////////////
//  Box View
///////////////////////////////////////////////////

const BoxView = (props) => {

    console.log("**** In Box View *****");

    return (
        <div>
            <h3>Box View</h3>
            <hr />
            <p>Box color array: {JSON.stringify(props.boxColorArray)}</p>
            <hr />
            <div className='row'>
                {
                    props.boxColorArray.map((color, i) =>
                        <div className='col m-2 box' key={i}>
                            <BoxComp
                                color={color} />
                        </div>
                )
                }
            </div>
        </div>
    )
}

export default BoxView;