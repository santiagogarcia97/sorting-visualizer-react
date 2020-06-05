import React from 'react'

const ArrayItem = ({ number }) => {
  const style = {
    height: `${Math.floor(number / 10)}vh`,
  }

  return <div style={style} />
}

export default ArrayItem
