import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function Header() {
  return (
    <Jumbotron className="header">
      <div>
        <img className="profile" src="./Rik.png" alt="" />
        <img className="logo" src="./Rikverse-logo.png" alt="" />

      </div>
    </Jumbotron>
  )

}