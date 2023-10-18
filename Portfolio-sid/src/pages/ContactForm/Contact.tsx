import React from 'react';
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-section">
          <div className="contact-container">
            <div className="box">
              <p className="title">Contact Me</p>
            </div>
            <div className="contact-div">
              <div className="contact-left">
                <img
                  src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=1060&t=st=1688730291~exp=1688730891~hmac=f95485b302e268d3f9f9b7f5a07cd40d287f305b264ee057e80517eb42123b90"
                  alt=""
                />
              </div>
              <div className="contact-right">
                <form action="">
                  <div className="form-groups">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="Message">message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Message me"
                    ></textarea>
                  </div>
                  <div className="form-groups">
                    <button type="submit">Submit Here</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact;