'use strict'

import React from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'
import './css/style.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  resetState = () => {
    this.setState({
      userInfo: null,
      repos: [],
      starred: []
    })
  }

  handleKeyUp = (e) => {
    
    const ENTER = 13
    const value = e.target.value
    const keyCode = e.which || e.keyCode

    if (keyCode === ENTER) {
      this.resetState()
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          userInfo: {
            name: result.name,
            username: result.login,
            image: result.avatar_url,
            repo: result.public_repos,
            followers: result.followers,
            following: result.following
          },
        })
      })
      .catch((err) => alert('usuario não encontrado'))
    }
  }

  handleGetRepos = () => {
    ajax().get(`https://api.github.com/users/${this.state.userInfo.username}/repos`).then((repos) => {
      this.setState({
        repos: repos.map( repo => {
          return {
            name: repo.name,
            url: repo.html_url
          }
        })
      })
    })
  }
  
  handleGetStarred = () => {
    ajax().get(`https://api.github.com/users/${this.state.userInfo.username}/starred`).then((dataStarred) => {
      this.setState({
        starred: dataStarred.map(item => {
          return {
            name: item.name,
            url: item.html_url
          }
        })
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <AppContent
          {...this.state}
          handleKeyUp={this.handleKeyUp} 
          handleGetRepos={this.handleGetRepos}
          handleGetStarred={this.handleGetStarred}  
          />
      </div>
    )
  }
}

export default App
