import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {Tooltip} from "react-tooltip";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi";
import { FaHome, FaBlog } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [ t, i18n ] = useTranslation( "global" );

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left "}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/portfolio-dianarios/">D</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "resume", "work", "blog", "contactus"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a
                className="nav-link "
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <Tooltip
                  id="HOME"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.home" ) }</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-tip
                data-for="ABOUT"
                onClick={handleClick}
              >
                <FiUser />
                <Tooltip
                  id="ABOUT"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.about" ) }</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                data-tip
                data-for="RESUME"
                onClick={handleClick}
              >
                <FiFileText />
                <Tooltip
                  id="RESUME"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.resume" ) }</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#work"
                data-tip
                data-for="WORK"
                onClick={handleClick}
              >
                <FiBriefcase />
                <Tooltip
                  id="WORK"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.work" ) }</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#blog"
                data-tip
                data-for="BLOG"
                onClick={handleClick}
              >
                <FaBlog />
                <Tooltip
                  id="BLOG"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.blog" ) }</span>
                </Tooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-tip
                data-for="CONTACT"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <Tooltip
                  id="CONTACT"
                  place="right"
                  type="dark"
                  effect="float"
                >
                  <span>{ t( "header.contact" ) }</span>
                </Tooltip>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
