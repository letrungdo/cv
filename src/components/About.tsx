import React, { Component } from "react";
import { IMainInfo } from "../Models/MainInfo";

interface Props {
  data: IMainInfo;
}

class About extends Component<Props> {
  render() {
    if (!this.props.data) return "";

    const {
      name,
      bio,
      phone,
      email,
      resumedownload,
      image,
      address
    } = this.props.data;
    const profilepic = "images/" + image;
    const { street, city, state, zip } = address;

    return (
      <section id="about">
        <div className="row container-fluid">
          <div className="col-xs-12 col-md-3 d-flex justify-content-center">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Le Trung Do Profile Pic"
            />
          </div>
          <div className="col-xs-12 col-md-9">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="col-xs-12 col-md-6 contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="col-xs-12 col-md-6 download">
                <a
                  href={resumedownload}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
