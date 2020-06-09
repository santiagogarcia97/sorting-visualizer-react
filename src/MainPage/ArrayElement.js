import React from 'react'

const ArrayElement = ({ element, render }) => {
  const style = {
    height: `${element.value / 10}%`,
    backgroundColor: element.color,
  }

  return <div style={style}></div>
}

export default ArrayElement
