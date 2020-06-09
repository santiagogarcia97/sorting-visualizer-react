import React, { useState } from 'react'
import Menu from './Menu'
import ArrayElement from './ArrayElement'

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const MainPage = () => {
  const [array, setArray] = useState([])
  const [renderType, setRenderType] = useState('bars')

  const generateArray = (arrayLength) => {
    const newArray = []
    for (let i = 0; i < parseInt(arrayLength, 10); i += 1) {
      newArray[i] = {
        value: getRandomArbitrary(20, 1000),
        color: 'darkred',
      }
    }
    setArray(newArray)
  }

  if (array.length === 0) generateArray(25)
  return (
    <div className="container main">
      <Menu
        array={array}
        setArray={setArray}
        generateArray={generateArray}
        setRenderType={setRenderType}
      />

      <div className="flex-container">
        {array.map((e, i) => (
          <ArrayElement key={i} element={e} render={renderType} />
        ))}
      </div>

      <div className="bottom-bar" />
    </div>
  )
}

export default MainPage
