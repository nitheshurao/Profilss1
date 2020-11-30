import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;

      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        {/* <div className="row education">
         <div className="three columns header-col">
            {/* <h1><span>Education</span></h1> */}
        {/* </div> */}

        {/* <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {/* {education} */}
        {/* </div>
            </div>
         </div> */}
        {/* // </div> */}

        {/* 
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}
        <div className="row">
          <h2>About Me</h2>
          <p>{bio} </p>
       
          <span>{name}</span><br />
          <div className="columns download">
            <p>
              <a href="https://drive.google.com/file/d/1On-Pry_mwE_mcDkj6jzH6-l6sKjlpNk9/view?usp=sharing" className="" download="https://drive.google.com/file/d/1On-Pry_mwE_mcDkj6jzH6-l6sKjlpNk9/view?usp=sharing"><i className="fa fa-download"></i>Download Resume</a>
            </p>
          </div>
        </div>



        <div className="row skill">
     
          <div className="three columns header-col">

            
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
