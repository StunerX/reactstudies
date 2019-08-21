'use strict'

import React from 'react'

const Repo = ({className, title, repo}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>{
        repo.map((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)
      }
      </ul>
    </div>
  )
}

Repo.defaultProps = {
  className: ''
}

Repo.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repo: React.PropTypes.array.isRequired
}

export default Repo
