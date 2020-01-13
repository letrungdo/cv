import React, { Component } from "react";
import { IMainInfo } from "../Models/MainInfo";

interface Props {
  data: IMainInfo;
}

class Contact extends Component<Props> {
  handleChange = () => {};
  render() {
    if (!this.props.data) return "";
    var name = this.props.data.name;
    var street = this.props.data.address.street;
    var city = this.props.data.address.city;
    var state = this.props.data.address.state;
    var zip = this.props.data.address.zip;
    var phone = this.props.data.phone;
    var email = this.props.data.email;
    var message = this.props.data.contactmessage;

    return (
      <section id="contact" className="container-fluid">
        <div className="row section-head">
          <div className="col-xs-12 col-md-4 header-col">
            <h1>
              <i className="fa fa-envelope fa-2x mr-2"></i>
              <span>Get In Touch</span>
            </h1>
          </div>

          <div className="col-xs-12 col-md-8">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size={30}
                    id="contactName"
                    name="contactName"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size={30}
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size={30}
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={15}
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="col-xs-12 col-md-6 footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
