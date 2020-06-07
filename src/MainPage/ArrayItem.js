import React from 'react'

const ArrayItem = ({ number }) => {
  const height = number / 10
  const style = {
    height: `${height}%`,
  }

  return <div style={style} />
}

export default ArrayItem
