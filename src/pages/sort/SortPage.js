import React, { useState } from 'react'
import ArrayItem from './ArrayItem'

const SortPage = () => {
  const [array, setArray] = useState([])
  console.log(array)

  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 50; i += 1) {
      newArray[i] = Math.floor(Math.random() * 1000)
    }
    setArray(newArray)
  }
  return (
    <div>
      Sort page
      <div>
        <button type="button" onClick={generateArray}>
          generate array
        </button>
        <button type="button">bubble</button>
        <button type="button">merge</button>
      </div>
      <div className="flex-container">
        {array.map((number, i) => (
          <ArrayItem key={i} number={number} />
        ))}
      </div>
    </div>
  )
}

export default SortPage
