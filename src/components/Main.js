import React from 'react'
import Header from './Header'
import ReactPlayer from 'react-player'
import { Container } from 'react-bootstrap'


export default function Main() {
  return (
    <div>
      <Header />
      <Container>
        <div className="home">
          <h1>Welcome</h1>
          <p>This is Rik Page</p>
        </div>
        <div className="player" >
          <ReactPlayer style={{ margin: 'auto' }} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>

      </Container>
    </div>
  )

}