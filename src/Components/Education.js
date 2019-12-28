import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>
              <a>{education.school}</a>
            </h3>
            <p className="info">
              {education.university}
              <br />
              <h6>
                <i>{education.degree}</i>
              </h6>
              <em className="date">
                <br />
                {education.graduated}
              </em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>
              <a>{work.company}</a>
            </h3>
            <p className="info">
              {work.title}
              <br /> <em className="date">{work.years}</em>
            </p>
            <p>
              <span>&bull;</span>
              {work.description1}
              <br />
              <span>&bull;</span>
              {work.description2}
              <br />
              <span>&bull;</span>
              {work.description3}
              <br />
              <span>&bull;</span>
              {work.description4}
              <br />
            </p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
