import React, { useState } from 'react'
import Menu from './Menu'
import ArrayElement from './ArrayElement'

// Gets random number from interval. From mozilla examples
const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const MainPage = () => {
  const [array, setArray] = useState([])

  const generateArray = (arrayLength) => {
    const newArray = []
    for (let i = 0; i < parseInt(arrayLength, 10); i += 1) {
      newArray[i] = {
        value: getRandomArbitrary(10, 1000),
        color: 'darkred',
      }
    }
    setArray(newArray)
  }

  if (array.length === 0) generateArray(25)
  return (
    <div className="container main">
      <Menu array={array} setArray={setArray} generateArray={generateArray} />

      <div className="flex-container">
        {array.map((e, i) => (
          <ArrayElement element={e} render={''} />
        ))}
      </div>

      <div className="bottom-bar" />
    </div>
  )
}

export default MainPage
