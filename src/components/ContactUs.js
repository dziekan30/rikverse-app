import React from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
require('dotenv').config();

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('rikverse', 'rikverse', e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <Container>
      <div>
        <form onSubmit={sendEmail}>

          <div className="row pt-5 mx-auto" >
            <div className="col-8 form-group mx-auto">
              <label>Name</label>
              <input className="form-control" type="text" placeholder="Name" name="name" />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <label>Email</label>
              <input className="form-control" type="email" placeholder="Email Address" name="email" />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <label>Goals</label>
              <input className="form-control" type="text" placeholder="Goals" name="goals" />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <label>Phone Number</label>
              <input className="form-control" type="text" placeholder="Phone Number (Optional )" name="phone_number" />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <label>Message</label>
              <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message" ></textarea>
            </div>

            <div className="col-8 pt-3 mx-auto">
              <input type="submit" className="btn btn-secondary" value="Send Message" />
            </div>


          </div>
        </form>
      </div>
    </Container>
  );
}
