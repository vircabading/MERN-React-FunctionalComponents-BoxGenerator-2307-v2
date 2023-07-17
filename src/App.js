import './App.css';
import React, { useState } from 'react';

import NavBarView from './views/NavBarView';
import ColorFormView from './views/ColorFormView';
import BoxView from './views/BoxView';

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
      <NavBarView />
      <div className='container mt-4 text-dark-color'>
        <div className='row bg-white p-3 round'>
          <h3>Main Display Area</h3>
          <hr />
          <p>Box Color Array: { JSON.stringify( boxColorArray ) }</p>
          <hr />
          {/* **** Color Form Section ************ */}
          <ColorFormView 
            addNewColor={ addNewColor } />
          {/* **** Box Display Section ************ */}
          <BoxView 
            boxColorArray={ boxColorArray } />
        </div>
      </div>
    </main>
  );
}

export default App;
