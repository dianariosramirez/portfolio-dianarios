// Components
import Social from "../Social";
// import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
// import Awards from "../award/AwardsAnimation";
import { useTranslation } from "react-i18next";

const About = () => {
  const[ t ] = useTranslation( "global" );

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
                  <p>{ t( "about.career" ) }</p>
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
                  <h3>{ t( "header.about" ) }</h3>
                </div>

                <div className="about-text">
                  <p>
                    { t( "about.aboutText1" ) }
                  </p>
                  <p>
                    { t( "about.aboutText2" ) }
                  </p>
                  <p>
                    { t( "about.aboutText3" ) }
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>{ t( "about.name" ) }</label>
                          <span>Diana Rios</span>
                        </li>
                        <li>
                          <label>{ t( "about.birthday" ) }</label>
                          <span>{ t( "about.birthdayData" ) }</span>
                        </li>
                        <li>
                          <label>{ t( "about.age" ) }</label>
                          <span>{ t( "about.ageData" ) }</span>
                        </li>
                        <li>
                          <label>{ t( "about.location" ) }</label>
                          <span>Oaxaca, México</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>{ t( "about.phone" ) }</label>
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
                          <span>{ t( "about.freelanceData" ) }</span>
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
            <h3>{ t( "about.whatIDo" ) }</h3>
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
