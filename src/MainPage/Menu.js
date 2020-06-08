import React, { useState } from 'react'
import bubleSort from './bubbleSort'

const Menu = ({ array, setArray, generateArray }) => {
  const [menuDisabled, setMenuDisabled] = useState(false)
  const [arrayLength, setArrayLength] = useState('25')
  const [delay, setDelay] = useState('50')
  const [algorithm, setAlgorithm] = useState('merge')

  const newArrayState = (arrayState, count, sorted) => {
    setTimeout(() => {
      if (sorted) setMenuDisabled(false)
      setArray(arrayState)
    }, delay * count)
  }

  const handleSortClick = () => {
    setMenuDisabled(true)
    switch (algorithm) {
      case 'bubble':
        bubleSort(array, newArrayState)
        break
      default:
        console.log(algorithm)
    }
  }

  return (
    <div className={menuDisabled ? 'disabled' : null}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="arrayLenght">Array lenght: {arrayLength}</label>
          <input
            id="arrayLenght"
            type="range"
            onChange={(event) => setArrayLength(event.target.value)}
            value={arrayLength}
            min="5"
            max="100"
            step="5"
          />
          <small>Min: 5 - Max: 100</small>
        </div>

        <div className="form-group">
          <label htmlFor="delay">Animation delay: {delay}ms</label>
          <input
            id="delay"
            type="range"
            onChange={(event) => setDelay(event.target.value)}
            value={delay}
            min="10"
            max="1000"
            step="10"
          />
          <small>Min: 10 - Max: 1000</small>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="algorithm">Algorithm</label>
          <select
            id="algorithm"
            name="algorithm"
            onBlur={(e) => setAlgorithm(e.target.value)}
            defaultValue={algorithm}
          >
            <option value="bubble">Bubble</option>
            <option value="merge">Merge</option>
            <option value="heap">Heap</option>
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

      <div className="form-row">
        <div className="form-group">
          <button
            type="button"
            onClick={() => {
              generateArray(arrayLength)
            }}
          >
            Generate array
          </button>
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSortClick}>
            Sort
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
