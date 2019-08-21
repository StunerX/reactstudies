'use strict'
import React from 'react'
import style from './userinfo.css'

const UserInfo = ({userInfo}) => {
  return (
    <div className='user-info'>
      <div >
        <img className={style.picture} src={userInfo.image} />
      </div>
      <h1>
        <a href={`https://github.com/${userInfo.username}`}>{userInfo.name}</a>
      </h1>
      <ul className='respo-info'>
        <li>- Repositorios: {userInfo.repo} </li>
        <li>- Seguidores: {userInfo.followers}</li>
        <li>- Seguindo: {userInfo.following}</li>
      </ul>
    </div>
  )
}

export default UserInfo
