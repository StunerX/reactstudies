'use strict'

import React from 'react'
import style from './search.css'

const Search = ({handleKeyUp}) => {
  return (
    <div className={style.search}>
      <input type='search' placeholder='Digite o nome do usuario do Github'
        onKeyUp={handleKeyUp} />
    </div>
  )
}

export default Search
