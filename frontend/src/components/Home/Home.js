import React from 'react'

import "./Home.css"

import userData from "./data"

const Home = () => {

  const [users, setUsers] = React.useState(userData);
  console.log(users)

  return (
    <div className="home-container">
      {users.map(user => {
        return (
          <div className="home-profile-card" key={user.id}>
            <img className="home-profile-image" src="" alt={`${user.name}'s profile picture`} />
            <h1 className="home-profile-name" >{user.name}</h1>
            <h1 className="home-profile-age" >{user.age}</h1>
            <h1 className="home-profile-eyes" >{user.eyes}</h1>
            <h1 className="home-profile-height" >{user.height}</h1>
            <h1 className="home-profile-weight" >{user.weight}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Home