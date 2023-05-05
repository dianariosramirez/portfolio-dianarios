import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {

  const [ t, i18n ] = useTranslation( "global" );

  return (
    <>
      <div className="contact-info">
        <h4>{ t( "contactInfo.contactMe" ) }</h4>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              { t( "contactInfo.location" ) }
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">dianariosram@gmail.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+52 953 164 2942</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
