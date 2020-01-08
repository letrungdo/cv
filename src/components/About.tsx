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
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Le Trung Do Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
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
              <div className="columns download">
                <p>
                  <a
                    href={resumedownload}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
