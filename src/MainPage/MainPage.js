import React, { useState } from 'react'
import Menu from './Menu'

const MainPage = () => {
  const [array, setArray] = useState([])

  return (
    <div className="container main">
      <Menu array={array} setArray={setArray} />
      <div className="flex-container">
        {array.map((element, i) => (
          <div
            key={i}
            style={{
              height: `${element.value / 10}%`,
              backgroundColor: element.color,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MainPage
