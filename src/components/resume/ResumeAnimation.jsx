import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Desarrollador front-end`,
    jobType: `Freelance | Remote`,
    jobDuration: `Nov 2022 - actualidad`,
    timeDuraton: `Tiempo completo`,
    compnayName: "Proyectos personales",
    jobDescription: `Desarrollo de aplicaciones web
      utilizando herramientas tales como React, 
      React Router y Material UI, entre otras, 
      con la finalidad de practicar y adquirir 
      experiencia en el campo del desarrollo web. 
      Se han desarrollado dos aplicaciones principales,
      a saber: un detector de rostros que utiliza la API
      Clarifai y una tienda en línea dedicada a la venta 
      de tizanas.`,
    delayAnimation: "",
  }
];

const educatonContent = [
  {
    passingYear: "2022-2023",
    degreeTitle: "Desarrollo web",
    instituteName: "Zero To Mastery Academy",
  },
  {
    passingYear: "20117-2022",
    degreeTitle: "Ingeniería en alimentos",
    instituteName: "Universidad Tecnológica de la Mixteca",
  },
  {
    passingYear: "2014-2017",
    degreeTitle: "Bachillerato general, Especialidad: Informática",
    instituteName: "Centro de Estudios Científicos y Tecnológicos del Estado de Oaxaca",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experiencia</h3>
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
            <h3>Education & Skills</h3>{" "}
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
