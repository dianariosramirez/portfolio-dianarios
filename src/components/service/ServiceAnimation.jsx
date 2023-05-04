import React from "react";
import { useTranslation } from "react-i18next";

const Service = () => {

  const [ t, i18n ] = useTranslation( "global" );

  const ServiceContent = [
    {
      icon: "icon-desktop",
      title: t( "about.services.title1" ),
      descriptions: t( "about.services.description1" ),
      delayAnimation: "200",
    }
  ];

  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;