import React from 'react';
import './App.css';
import { characters } from './arrays';
import { CircularImage } from './component/CircularImage';

function App() {
  return (
    <div className="App">
      <h1>What are JavaScript array methods?</h1>
      <p>First of all, what is an array?</p>
      <p>
        An array is a special variable, which can hold more than one value at a time.
      </p>
      <p>Example of an array:</p>
      <p>
        <code>const characters = ['Alicent', 'Rhaenyra', 'Rhaenys']</code>
      </p>
      <p>
        JavaScript array methods are built-in functions
        that are used to perform operations on arrays. They are used to add, remove,
        replace, and transform elements in an array.
      </p>
      <p>This tutorial uses an array with House of the Dragon characters. Below are the common array methods.</p>

      {/* give me a line to divide the sections */}
      <hr />

      {/* length */}
      <h2>length</h2>
      <div className='description'>
        <p>
          The length property returns the length of an array.
        </p>
      </div>
      <div className='example'>
        <code>characters.length</code>
        <p className='result'>{characters.length}</p>
      </div>
      {/* give me a line to divide the sections */}
      <hr />

      {/* push */}
      <h2>push</h2>
      <div className='description'>
        <p>
          The push method adds new items to the end of an array, and returns the new length.
        </p>
      </div>
      <div className='example'>
        <code>{`characters.push('{name: "Lyonel Strong", house: "Strong", dragon: null, image: "lyonel.png"}')`}</code>
        <p className='result'>{characters.push({ name: "Lyonel Strong", house: "Strong", dragon: null, image: "lyonel.png" })}</p>
      </div>
      {/* give me a line to divide the sections */}
      <hr />

      {/* pop */}
      <h2>pop</h2>
      <div className='description'>
        <p>
          The pop method removes the last element from an array, and returns that element.
        </p>
      </div>
      <div className='example'>
        <code>{`characters.pop()`}</code>
        <p className='result'>
          <CircularImage imageUrl={characters.pop()?.image || ""} name={characters.pop()?.name || ""} />
        </p>
      </div>
      {/* give me a line to divide the sections */}
      <hr />

      {/* map */}
      <h2>map</h2>
      <div className='description'>
        <p>
          The map method creates a new array with the results of calling a function for every array element.
        </p>
      </div>
      <div className='example'>
        <code>{`characters.map(character => character.name)`}</code>
        <p className='result'>{characters.map(character => <p key={character.name}>{character.name}</p>)}</p>
      </div>
      {/* give me a line to divide the sections */}
      <hr />

      {/* filter */}
      <h2>filter</h2>
      <div className='description'>
        <p>
          The filter method creates a new array with array elements that pass a test.
        </p>
      </div>
      <div className='example'>
        <code>{`characters.filter(character => character.house === 'Targaryen')`}</code>
        <div className='result'>
          {characters.filter(character => character.house === 'Targaryen')
            .map(character =>
              <CircularImage key={character.name} imageUrl={character.image} name={character.name} />
            )}
        </div>
      </div>
      {/* give me a line to divide the sections */}
      <hr />

      {/* filter characters not in the Targaryen with a dragon */}
      <h2>More complex logic...</h2>
      <div className='description'>
        <p>
          Using the filter method, create a new array with characters that are not in the Targaryen house and have a dragon.
        </p>
        <div className='example'>
          <code>{`characters.filter(character => character.house !== 'Targaryen' && character.dragon)`}</code>
          <p className='result'>{characters.filter(character => character.house !== 'Targaryen' && character.dragon).map(character =>
            <CircularImage key={character.name} imageUrl={character.image} name={character.name} />
          )}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
