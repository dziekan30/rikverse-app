import React from 'react'
import { Container } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <Container>
      <div className="player">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </div>
    </Container>
  )

}