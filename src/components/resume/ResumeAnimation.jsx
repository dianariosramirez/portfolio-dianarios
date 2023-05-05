import React from "react";
import Skills from "../skills/Skills";
import { useTranslation } from "react-i18next";


const Resume = () => {

  const [ t, i18n ] = useTranslation( "global" ); 

  const resumeContent = [
    {
      jobPosition: t( "resume.jobs.job1.position" ),
      jobType: t( "resume.jobs.job1.type" ),
      jobDuration: t( "resume.jobs.job1.jobDuration" ),
      timeDuraton: t( "resume.jobs.job1.timeDuration" ),
      compnayName: t( "resume.jobs.job1.compnayName" ),
      jobDescription: t( "resume.jobs.job1.description" ),
      delayAnimation: "",
    },
    {
      jobPosition: t( "resume.jobs.job2.position" ),
      jobType: t( "resume.jobs.job2.type" ),
      jobDuration: t( "resume.jobs.job2.jobDuration" ),
      timeDuraton: t( "resume.jobs.job2.timeDuration" ),
      compnayName: t( "resume.jobs.job2.compnayName" ),
      jobDescription: t( "resume.jobs.job2.description" ),
      delayAnimation: "",
    },
  ];

  const educatonContent = [
    {
      passingYear: "2022-2023",
      degreeTitle: t( "resume.education.education1.degreeTitle" ),
      instituteName: t( "resume.education.education1.instituteName" )
    },
    {
      passingYear: "20117-2022",
      degreeTitle: t( "resume.education.education2.degreeTitle" ),
      instituteName: t( "resume.education.education2.instituteName" )
    },
    {
      passingYear: "2014-2017",
      degreeTitle: t( "resume.education.education3.degreeTitle" ),
      instituteName: t( "resume.education.education3.instituteName" )
    },
  ];

  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>{ t( "resume.experience" ) }</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>{ t( "resume.education.educationTitle" ) }</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
