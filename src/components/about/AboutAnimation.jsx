import React from "react";

// Components
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web developer</p>
                  <h3>Diana Rios</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Sobre mí</h3>
                </div>

                <div className="about-text">
                  <p>
                  Soy una ingeniera en alimentos apasionada por la ciencia y la 
                  tecnología, además de una desarrolladora web con una 
                  sed insaciable de conocimiento. Me encanta aprender y
                  siempre estoy buscando nuevos retos y oportunidades 
                  para crecer tanto personal como profesionalmente.
                  </p>
                  <p>
                  Siempre he sido una persona curiosa, y mi amor por el
                  aprendizaje me llevó a explorar el mundo de la programación y el desarrollo. Me di cuenta de que las habilidades que adquirí en 
                  mi carrera como ingeniera en alimentos se traducen perfectamente
                  en el mundo de la programación: la capacidad de analizar y 
                  resolver problemas complejos, la atención al detalle y la 
                  pasión por crear soluciones efectivas.
                  </p>
                  <p>
                  Hoy en día, me enorgullece ser una 
                  desarrolladora web, y estoy emocionada por todo lo que 
                  el futuro tiene reservado para mí. Si estás buscando a 
                  alguien que siempre esté buscando aprender, crecer y 
                  enfrentar nuevos desafíos, ¡soy la persona adecuada para ti!
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Nombre: </label>
                          <span>Diana Rios</span>
                        </li>
                        <li>
                          <label>Cumpleaños: </label>
                          <span>13 enero 1999</span>
                        </li>
                        <li>
                          <label>Edad: </label>
                          <span>24 años</span>
                        </li>
                        <li>
                          <label>Ubicación: </label>
                          <span>Oaxaca, México</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Tel. Cel.: </label>
                          <span>(+52) 953 164 2942</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>dianariosram@gmail.com</span>
                        </li>
                        <li>
                          <label>Discord: </label>
                          <span>Juqui#0056</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Disponible</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
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
            <h3>¿Qué hago?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div> */}

          {/* <Awards /> */}
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                 "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div> */}

          {/* <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
