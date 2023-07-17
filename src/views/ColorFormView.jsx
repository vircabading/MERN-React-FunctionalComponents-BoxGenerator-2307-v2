import React, { useState } from 'react';
import '../App.css';

///////////////////////////////////////////////////
// Color Form View
///////////////////////////////////////////////////

const ColorFormView = (props) => {
    const [colorInput, setColorInput] = useState("");

    /**
     * Allows the text in the text color form to change
     * @param {*} e 
     */
    const handleColorInputChange = (e) => {
        const input = e.target.value;
        setColorInput(input);
    }

    /**
     * Retrievces the information from the form being submitted
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("***** In Handle Submit **********");
        props.addNewColor( colorInput );
        setColorInput("");
    }

    return (
        <div className='bg-tif-blue round p-2'>
            <p>Color Input: { JSON.stringify(colorInput) }</p>
            <form onSubmit={ handleSubmit } >
                <div className="form-group">
                    <label for="colorInput">
                        <h5 className='text-dark-color' >Box Color:</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control round"
                        id="colorInput"
                        name="colorInput"
                        value={colorInput}
                        placeholder="Enter color here" 
                        onChange={ handleColorInputChange } />
                </div>
                <hr />
                <input
                    type='submit'
                    className='btn bg-ult-violet round-btn text-white' />
            </form>
        </div>
    )
}

export default ColorFormView;