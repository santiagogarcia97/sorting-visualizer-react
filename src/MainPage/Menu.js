import React from 'react'
import bubleSort from './bubbleSort'

// Gets random number from interval. From mozilla examples
const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

// eslint-disable-next-line react/prop-types
const Menu = ({ array, setArray }) => {
  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 50; i += 1) {
      newArray[i] = {
        value: getRandomArbitrary(10, 1000),
        color: 'darkred',
      }
    }
    setArray(newArray)
  }

  const handleSortClick = () => {
    bubleSort(array, setArray)
  }

  return (
    <div className="menu">
      <button type="button" onClick={generateArray}>
        Generate array
      </button>
      <button type="button" onClick={handleSortClick}>
        Bubble sort
      </button>
    </div>
  )
}

export default Menu
