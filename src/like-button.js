'use strict'

import React from 'react'
import Button from './button.js'

const LikeButton = () => {
  return (
    <Button handleButtonClick={() => alert('clicou no like button cuzão!')}>Like Button</Button>
  )
}

export default LikeButton
