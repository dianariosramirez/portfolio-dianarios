import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Contáctame</h4>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Huajuapan de León, Oaxaca, Mex. CP: 69004
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
