import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function Footer() {
  return (
    <Jumbotron className="footer">
      <div >
        <div className="row">
          <div className="col-6">
            <h1 style={{ color: 'white' }}>RIK<span style={{ color: 'red' }}>VERSE</span></h1>
          </div>
          <div className="col-6">
            <i class="fas fa-phone-alt"></i><span>Phone Number</span>
            <h2>000-111-1100</h2>
          </div>
        </div>
        <div >
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-square fa-2x icon"></i>
          </a>
          <i className="fab fa-instagram fa-2x icon"></i>
          <i className="fab fa-twitter-square fa-2x icon"></i>
          <i className="fab fa-youtube fa-2x icon"></i>
        </div>
        <div className="rights">
          <p>© 2020 Rikverse.  All rights reserved. </p>
        </div>
      </div>
    </Jumbotron>
  )

}