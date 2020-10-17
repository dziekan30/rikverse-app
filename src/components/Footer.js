import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron className="footer">
      <div>
        <div>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fas fa-envelope-square"></i>
        </div>
        <div>
          <p>© 2020 Rikverse.  All rights reserved. </p>
        </div>
      </div>
    </Jumbotron>
  )

}