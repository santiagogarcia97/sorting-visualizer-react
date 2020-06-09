import React from 'react'

const ArrayElement = ({ element, render }) => {
  const height = `${element.value / 10}%`
  const backgroundColor = element.color

  if (render === 'bars') {
    return <div style={{ height, backgroundColor }}></div>
  } else if (render === 'dots') {
    return (
      <div style={{ height }}>
        <div className="dot" style={{ backgroundColor }} />
      </div>
    )
  }
}

export default ArrayElement
