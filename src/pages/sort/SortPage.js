import React, { useState } from 'react'
import ArrayItem from './ArrayItem'

const SortPage = () => {
  const [array, setArray] = useState([])

  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 50; i += 1) {
      newArray[i] = Math.floor(Math.random() * 1000)
    }
    setArray(newArray)
  }

  function task(auxArr, i) {
    setTimeout(function () {
      setArray(auxArr)
    }, 25 * i)
  }

  const bubbleSort = () => {
    console.log('sort', array)
    const n = array.length
    const auxArr = [...array]
    let count = 1
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (auxArr[j] > auxArr[j + 1]) {
          const aux = auxArr[j]
          auxArr[j] = auxArr[j + 1]
          auxArr[j + 1] = aux
          task([...auxArr], count)
          count += 1
        }
      }
    }
  }

  return (
    <div>
      Sort page
      <div>
        <button type="button" onClick={generateArray}>
          generate array
        </button>
        <button type="button" onClick={bubbleSort}>
          bubble
        </button>
        <button type="button">merge</button>
      </div>
      <div>
        {array.map((e) => {
          return ` ${e} `
        })}
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
