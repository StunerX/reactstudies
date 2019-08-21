'use strict'

import React from 'react'

const Actions = ({handleGetRepos, handleGetStarred}) => {
  return (
    <div className='actions'>
      <button onClick={handleGetRepos}>Ver Repositorios</button>
      <button onClick={handleGetStarred}>Ver Favoritos</button>
    </div>
  )
}

export default Actions
