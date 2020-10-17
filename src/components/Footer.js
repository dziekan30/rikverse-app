import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron className="footer">
      <div >
        <div>
          <h3 style={{ color: 'white' }}>RIK<span style={{ color: 'red' }}>VERSE</span></h3>
        </div>
        <div>
          <i class="fas fa-phone-alt"></i>
          <h4>000-111-1100</h4>

        </div>
        <div >
          <i className="fab fa-facebook-square fa-2x icon"></i>
          <i className="fab fa-instagram fa-2x icon"></i>
          <i className="fab fa-twitter-square fa-2x icon"></i>
          <i className="fab fa-youtube fa-2x icon"></i>
        </div>
        <div>
          <p>© 2020 Rikverse.  All rights reserved. </p>
        </div>
      </div>
    </Jumbotron>
  )

}