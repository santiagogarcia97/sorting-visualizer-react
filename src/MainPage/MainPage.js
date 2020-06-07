import React, { useState } from 'react'
import ArrayItem from './ArrayItem'
import Menu from './Menu'

const MainPage = () => {
  const [array, setArray] = useState([])

  return (
    <div className="container h-90">
      <Menu array={array} setArray={setArray} />
      <div className="flex-container h-90">
        {array.map((number, i) => (
          <ArrayItem key={i} number={number} />
        ))}
      </div>
    </div>
  )
}

export default MainPage
