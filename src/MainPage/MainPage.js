import React, { useState } from 'react'
import Menu from './Menu'

const MainPage = () => {
  const [array, setArray] = useState([])

  return (
    <div className="container h-90">
      <Menu array={array} setArray={setArray} />
      <div className="flex-container h-90">
        {array.map((element, i) => (
          <div
            key={i}
            className="bar"
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
