import React, { useState } from 'react'
import bubleSort from './bubbleSort'

// Gets random number from interval. From mozilla examples
const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// eslint-disable-next-line react/prop-types
const Menu = ({ array, setArray }) => {
  const [arrayLenght, setArrayLenght] = useState(10)
  const [delay, setDelay] = useState(100)

  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < arrayLenght; i += 1) {
      newArray[i] = {
        value: getRandomArbitrary(10, 1000),
        color: 'darkred',
      }
    }
    setArray(newArray)
  }

  const handleSortClick = () => {
    bubleSort(array, setArray, delay)
  }

  return (
    <div>
      <div className="options">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="arrayLenght">Number of elements</label>
            <input
              id="arrayLenght"
              min="5"
              max="300"
              type="number"
              onChange={(event) =>
                setArrayLenght(parseInt(event.target.value, 10))
              }
              value={arrayLenght}
            />
            <small>Min: 5 - Max: 300</small>
          </div>

          <div className="form-group">
            <label htmlFor="delay">Delay per iteration (ms)</label>
            <input
              id="delay"
              min="1"
              max="2000"
              type="number"
              onChange={(event) => setDelay(parseInt(event.target.value, 10))}
              value={delay}
            />
            <small>Min: 1 - Max: 2000</small>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="algorithm">Algorithm</label>
            <select id="algorithm" name="algorithm">
              <option value="bubble">Bubble</option>
              <option value="bubble">Merge</option>
              <option value="bubble">Heap</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="render">Render as</label>
            <select id="render" name="render">
              <option value="bubble">Bars</option>
              <option value="bubble">Dots</option>
            </select>
          </div>
        </div>
      </div>

      <div className="menu">
        <button type="button" onClick={generateArray}>
          Generate array
        </button>
        <button type="button" onClick={handleSortClick}>
          Sort
        </button>
      </div>
    </div>
  )
}

export default Menu
