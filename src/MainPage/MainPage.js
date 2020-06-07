import React, { useState } from 'react'
import Menu from './Menu'

const MainPage = () => {
  const [array, setArray] = useState([])

  return (
    <div className="container h-90">
      <Menu array={array} setArray={setArray} />
      <div className="flex-container h-90">
        {array.map((number, i) => (
          <div key={i} className="bar" style={{ height: `${number / 10}%` }} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
