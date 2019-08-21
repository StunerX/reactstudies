'use strict'

import React from 'react'

const Square = (props) => {
  return (
    <div style={{
      backgroundColor: props.color,
      width: '100px',
      height: '100px'
    }} onClick={(e) => {
      alert(`clicou no ${props.color}`)
    }} />
  )
}

Square.defaultProps = {
  color: 'black'
}

export default Square
