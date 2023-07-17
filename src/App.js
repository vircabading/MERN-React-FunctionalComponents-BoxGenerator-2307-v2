import './App.css';
import React, { useState } from 'react';

///////////////////////////////////////////////////
//  Main Application
///////////////////////////////////////////////////

const App = (props) => {
  const [boxColorArray, setBoxColorArray] = useState([]);

  /**
   * Adds a new color to the box color array
   * @param {String} newColor 
   */
  const addNewColor = (newColor) => {
    console.log("**** In Add New Color ********");
    console.log(`New Color: ${newColor}`);
    setBoxColorArray( (boxColorArray => [...boxColorArray, newColor]) );
    console.log(`Color Array: ${ boxColorArray }`);
  }

  return (
    <main>
      {/* <NavBarView /> */}
      <div className='container mt-4 text-dark-color'>
        <div className='row bg-white p-3 round'>
          <h3>Main Display Area</h3>
          <hr />
          <p>Box Color Array: { JSON.stringify( boxColorArray ) }</p>
          <hr />
          {/* <ColorFormView 
            addNewColor={ addNewColor } />
          <BoxView 
            boxColorArray={ boxColorArray } /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
