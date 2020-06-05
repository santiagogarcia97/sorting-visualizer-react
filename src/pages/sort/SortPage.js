import React, { useState } from 'react'

const SortPage = () => {
  const [array, setArray] = useState([])
  console.log(array)

  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 100; i += 1) {
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
        {array.map((e, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export default SortPage
