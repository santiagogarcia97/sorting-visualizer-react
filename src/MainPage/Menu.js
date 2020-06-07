import React from 'react'

// eslint-disable-next-line react/prop-types
const Menu = ({ array, setArray }) => {
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
    // eslint-disable-next-line react/prop-types
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
    <div className="menu">
      <button type="button" onClick={generateArray}>
        Generate array
      </button>
      <button type="button" onClick={bubbleSort}>
        Bubble sort
      </button>
    </div>
  )
}

export default Menu
