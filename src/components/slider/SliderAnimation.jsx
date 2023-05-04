import React from "react";
import { useTranslation } from "react-i18next";
import TextLoop from "react-text-loop";


const Slider = ( { onClickEN, onClickES } ) => {

  const [ t, i18n ] = useTranslation( "global" );

  const conctInfo = {
    phone: "+52 953 164 2942",
    email: "dianariosram@gmail.com",
  };
  
  const sliderContent = {
    name: "Diana Rios",
    designation: "Front end Developer",
    description: t( "slider.description" ),
    btnText: t( "slider.download" ),
  };

  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+52 953 164 2942">{conctInfo.phone}</a>
            <a href="mailto:dianariosram@gmail.com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <button onClick={ onClickEN }>EN</button>
              </li>
              <li>
                <button onClick={ onClickES }>ES</button>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  { t( "slider.hello" ) }
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">{ t( "slider.textLoop1" ) }</p>
                    <p className="loop-text lead">{ t( "slider.textLoop2" ) }</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="documents/CV.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
               "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
