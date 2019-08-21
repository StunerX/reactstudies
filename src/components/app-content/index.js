'use strict'

import React from 'react'
import Search from '../search'
import UserInfo from '../userinfo'
import Actions from '../actions'
import Repo from '../repo'

const AppContent = ({userInfo, repos, starred, handleKeyUp, handleGetRepos, handleGetStarred}) => {
  return (
    <div className='app'>
      <Search handleKeyUp={handleKeyUp} />
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions handleGetRepos={handleGetRepos} handleGetStarred={handleGetStarred} />}
      {!!repos.length && <Repo className='repo' title='Repo' repo={repos} />}
      {!!repos.length && <Repo className='starred' title='Favoritos' repo={starred} />}
    </div>
  )
}

AppContent.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  handleKeyUp: React.PropTypes.func.isRequired,
  handleGetRepos: React.PropTypes.func.isRequired,
  handleGetStarred: React.PropTypes.func.isRequired
}

export default AppContent
