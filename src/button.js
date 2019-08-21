'use strict'

import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{ props.children }</button>
  )
}

Button.defaultProps = {
  handleClick: (e) => {
    e.preventDefault()
    alert('clicou em button')
  }
}

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button
